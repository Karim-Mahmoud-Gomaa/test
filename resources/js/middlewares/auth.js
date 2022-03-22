import i18n from '../i18n'

export default function auth({next, store}) {
    // console.log("auth middlware run ...")
    if (!store.getters["auth/check"]) return next(`login`)
    else return next();
}
