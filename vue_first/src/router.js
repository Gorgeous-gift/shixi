import Vue from 'vue'
import Router from 'vue-router'
//import Index from '@/pages/index'

import first from '@/components/first'
import second from '@/components/second'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'first',
            component:()=>import('@/components/first.vue')
        },
        {
            path:'/second',
            name:'second',
            component:()=>import('@/components/second.vue')
        }
    ]
});

