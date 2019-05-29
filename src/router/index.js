import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routes'
import { routerMode } from '../config/env'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      if (from.meta.keepAlive) {
        // TODO 这个分支的作用
        from.meta.savePosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savePosition || 0 }
    }
  }
})

export default router
