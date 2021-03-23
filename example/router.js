import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior () {
      return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        component: () => import('~/pages/index.vue').then(m => m.default || m)
      },
      {
        path: '/test',
        component: () => import('~/pages/test.vue').then(m => m.default || m),
        meta: {
          claims: {
            role: 'Administrator',
            permission: 'ContentPages'
          }
        }
      },
      {
        path: '/errors/403',
        component: () => import('~/pages/errors/403.vue').then(m => m.default || m)
      }
    ]
  })
}
