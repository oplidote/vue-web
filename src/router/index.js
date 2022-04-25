import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '@/pages/HomeIndex';
const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {
            path: '/stx-vue/',
            name: 'Home',
            component: HomeIndex
        }, 
        {
            path: '/stx-vue/company',
            name: 'Company',
            component: HomeIndex
        }, 
        {
            path: '/stx-vue/business',
            name: 'Business',
            component: HomeIndex
        }, 
        {
            path: '/stx-vue/contribution',
            name: 'Cb',
            component: HomeIndex
        }, 
        {
            path: '/stx-vue/ad',
            name: 'AD',
            component: HomeIndex
        }, 
        {
            path: '/stx-vue/cs',
            name: 'CS',
            component: HomeIndex
        }, 
        {
            path: '/stx-vue/job',
            name: 'Job',
            component: HomeIndex
        } 
    ]
});

export default router;