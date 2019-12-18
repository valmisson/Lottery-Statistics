import Home from '@views/Home.vue'

const PageNotFound = () => import(/* webpackChunkName: "page__404" */ '@views/PageNotFound.vue')
const Statistics = () => import(/* webpackChunkName: "statistics" */ '@views/Statistics.vue')
const Results = () => import(/* webpackChunkName: "results" */ '@views/Results.vue')

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/estatisticas/:lottery',
    name: 'Estatisticas',
    component: Statistics
  },
  {
    path: '/resultados/:lottery',
    name: 'Resultados',
    component: Results
  }
]
