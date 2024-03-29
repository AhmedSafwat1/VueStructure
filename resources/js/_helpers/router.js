import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/home/HomePage'
import LoginPage from '../components/login/LoginPage'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/home', component: HomePage },
        { path: '/login-page', component: LoginPage },

        // otherwise redirect to home
        { path: '*', redirect: '/login-page' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login-page'];

    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
         next('/login-page');
    }

    next();
})