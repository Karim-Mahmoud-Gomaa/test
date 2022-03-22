import i18n from '../i18n'

export default async function checkAuth({ next, store }) {
    // console.log("check-auth middleware run ...");
    // console.log(store.getters["auth/user"]);
    if (!store.getters["auth/check"] && store.getters["auth/token"]) {
        await store.dispatch("auth/fetchUser");
        if(store.getters["auth/check"]){
            return next();
        }else{
            return next({ name: "login" });
        }
    } else if (store.getters["auth/check"] && store.getters["auth/token"]) {
        return next();
    } else {
        return next(`admin/login`);
    }
}
