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
            component: ''
        }, 
        {
            path: '/stx-vue/business',
            name: 'Business',
            component: ''
        }, 
        {
            path: '/stx-vue/contribution',
            name: 'Cb',
            component: ''
        }, 
        {
            path: '/stx-vue/ad',
            name: 'AD',
            component: ''
        }, 
        {
            path: '/stx-vue/cs',
            name: 'CS',
            component: ''
        }, 
        {
            path: '/stx-vue/job',
            name: 'Job',
            component: ''
        } 
    ]
});

export default router;