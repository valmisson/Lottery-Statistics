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
    path: '/estatisticas/megasena',
    name: 'Mega-Sena',
    meta: {
      title: 'Mega-Sena - Estatisticas'
    },
    component: Statistics
  },
  {
    path: '/estatisticas/lotofacil',
    name: 'Lotofácil',
    meta: {
      title: 'Lotofácil - Estatisticas'
    },
    component: Statistics
  },
  {
    path: '/estatisticas/quina',
    name: 'Quina',
    meta: {
      title: 'Quina - Estatisticas'
    },
    component: Statistics
  },
  {
    path: '/estatisticas/lotomania',
    name: 'Lotomania',
    meta: {
      title: 'Lotomania - Estatisticas'
    },
    component: Statistics
  },
  {
    path: '/resultados/megasena',
    name: 'Mega-Sena',
    meta: {
      title: 'Mega-Sena - Resultados'
    },
    component: Results
  },
  {
    path: '/resultados/lotofacil',
    name: 'Lotofácil',
    meta: {
      title: 'Lotofácil - Resultados'
    },
    component: Results
  },
  {
    path: '/resultados/quina',
    name: 'Quina',
    meta: {
      title: 'Quina - Resultados'
    },
    component: Results
  },
  {
    path: '/resultados/lotomania',
    name: 'Lotomania',
    meta: {
      title: 'Lotomania - Resultados'
    },
    component: Results
  }
]
