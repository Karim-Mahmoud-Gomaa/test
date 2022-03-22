//////////////////////////////////////////////////////////
// middlewares
import guest from "../middlewares/guest";
import auth from "../middlewares/auth";
import checkAuth from "../middlewares/auth-check";
import middlewarePipeline from "../routes/middlewarePipeline";
//////////////////////////////////////////////////////////
//
import VueRouter from "vue-router";
import Vue from "vue";
import store from "../store/index"; 
Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/admin',
            component: {render (c) { return c('router-view') }},
            children: [
                {path:'/',name: 'home',component:()=>import('../pages/Home'),meta:{title: 'Home',middleware: [auth, checkAuth]}},
                {path:'login',name: 'login',component:()=>import('../pages/auth/Login'),meta:{title: 'Login',middleware: [guest]}},
                //#Vue:Routes
                {path:'categories',name: 'categories',component:()=>import('../pages/Categories/Index'),meta:{title: 'Categories',middleware: [auth, checkAuth]}},
                {path:'articles',name: 'articles',component:()=>import('../pages/Articles/Index'),meta:{title: 'Articles',middleware: [auth, checkAuth]} },
                {path:'articles/create',name: 'create_articles',component:()=>import('../pages/Articles/Create'),meta:{title: 'Create Articles',middleware: [auth, checkAuth]} },
                {path:'articles/:article_id',name: 'edit_articles',component:()=>import('../pages/Articles/Edit'),meta:{title: 'Edit Article',middleware: [auth, checkAuth]} },
                {path:'users',name: 'users',component:()=>import('../pages/Users/Index'),meta:{title: 'Users',middleware: [auth, checkAuth]}},
            ]
        },
		
        {path:'/*',name: '404',component:()=>import('../pages/errors/404'),meta:{title: '404'}},
    ],
    linkExactActiveClass: "active" // active class for *exact* links.
});  

router.beforeEach((to, from, next) => {
    if (to.name=='login') {
        document.body.classList.add('authentication-bg');   
    } else {
        document.body.classList.remove('authentication-bg');   
    }
    /////////////////////////////////////
    if (!to.meta.middleware) return next();
    const middleware = to.meta.middleware;
    const context = {to,from,next,store};
    return middleware[0]({
        ...context,next: middlewarePipeline(context, middleware, 1)
    });
});
export default router;