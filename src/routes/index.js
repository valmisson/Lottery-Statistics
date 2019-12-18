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
  const { name } = to
  const { lottery } = to.params
  const lotteryName = lottery === 'megasena' ? 'Mega-Sena'
    : lottery === 'lotofacil' ? 'Lotofácil' : lottery === 'quina' ? 'Quina' : 'Lotomania'

  if (!lottery) {
    document.title = 'Lottery Statistics'

    return next()
  }

  document.title = `${lotteryName} - ${name} | Lottery Statistics`

  next()
})

export default router
