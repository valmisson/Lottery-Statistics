import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { title } = to.meta

  if (!title) {
    document.title = 'Lottery Statistics'

    return next()
  }

  document.title = title + ' | Lottery Statistics'

  next()
})

export default router
