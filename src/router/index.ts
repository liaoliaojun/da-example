import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('~/views/home.vue'),
  },
  {
    path: '/base',
    name: 'base',
    component: () => import('~/views/base/index.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('~/views/test.vue'),
  },
  {
    path: '/report',
    name: 'report',
    redirect: '/report/list',
    component: () => import('~/views/report/index.vue'),
    children: [{
      path: 'list',
      name: 'list',
      component: () => import('~/views/report/list.vue'),
    },{
      path: 'mount',
      name: 'mount',
      component: () => import('~/views/report/mount.vue'),
    }]
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
})
