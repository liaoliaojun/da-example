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
    path: '/test',
    name: 'test',
    component: () => import('~/views/test.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
})
