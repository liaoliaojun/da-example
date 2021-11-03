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
    redirect: '/base/list',
    component: () => import('~/views/base/index.vue'),
    children: [{
      path: 'list',
      name: 'BaseList',
      component: () => import('~/views/base/list.vue'),
    }, {
      path: 'mount',
      name: 'BaseMount',
      component: () => import('~/views/base/mount.vue'),
    }],
  },
  {
    path: '/interface',
    name: 'interface',
    redirect: '/interface/list',
    component: () => import('~/views/interface/index.vue'),
    children: [{
      path: 'list',
      name: 'InterfaceList',
      component: () => import('~/views/interface/list.vue'),
    }, {
      path: 'mount',
      name: 'InterfaceMount',
      component: () => import('~/views/interface/mount.vue'),
    }],
  },
  {
    path: '/report',
    name: 'report',
    redirect: '/report/list',
    component: () => import('~/views/report/index.vue'),
    children: [{
      path: 'list',
      name: 'Reportlist',
      component: () => import('~/views/report/list.vue'),
    }, {
      path: 'mount',
      name: 'ReportMount',
      component: () => import('~/views/report/mount.vue'),
    }],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
