import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue')
        },
        {
            path: '/book-now',
            name: 'book-now',
            component: () => import('./views/BookNow.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('./views/Blog.vue')
        },
        {
            path: '/art-jamming-with-a-twist',
            name: 'art-jamming-with-a-twist',
            component: () => import('./views/ArtJammingWithATwist.vue')
        },
        {
            path: '/clay-workshop',
            name: 'clay-workshop',
            component: () => import('./views/ClayWorkshop.vue')
        },
        {
            path: '/corporate-team-bonding',
            name: 'corporate-team-bonding',
            component: () => import('./views/CorporateTeamBonding.vue')
        },
        {
            path: '/just-the-venue',
            name: 'just-the-venue',
            component: () => import('./views/JustTheVenue.vue')
        },
        {
            path: '/paper-quilling-workshop',
            name: 'paper-quilling-workshop',
            component: () => import('./views/PaperQuilling.vue')
        },
        {
            path: '/sand-art-workshop',
            name: 'sand-art-workshop',
            component: () => import('./views/SandArtWorkshop.vue')
        },
        {
            path: '/birthday-parties',
            name: 'birthday-parties',
            component: () => import('./views/BirthdayParties.vue')
        },
        {
            path: '/catering',
            name: 'catering',
            component: () => import('./views/Catering.vue')
        },
        {
            path: '/activities',
            name: 'activities',
            component: () => import('./views/Activities.vue')
        }
    ]
});
