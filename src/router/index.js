import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '@/pages/HomeIndex';
const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {
            path: '/',
            name: 'Home',
            component: HomeIndex
        }, 
        {
            path: '/company',
            name: 'Company',
            component: ''
        }, 
        {
            path: '/business',
            name: 'Business',
            component: ''
        }, 
        {
            path: '/contribution',
            name: 'Cb',
            component: ''
        }, 
        {
            path: '/ad',
            name: 'AD',
            component: ''
        }, 
        {
            path: '/cs',
            name: 'CS',
            component: ''
        }, 
        {
            path: '/job',
            name: 'Job',
            component: ''
        } 
    ]
});

export default router;