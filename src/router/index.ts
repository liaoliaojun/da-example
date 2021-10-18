import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/home1',
    name: 'home1',
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
