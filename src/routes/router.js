import Home from '@views/Home.vue'

const Statistics = () => import(/* webpackChunkName: "statistics" */ '@views/Statistics.vue')

export default [
  {
    path: '/',
    redirect: '/estatisticas/'
  },
  {
    path: '/estatisticas/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estatisticas/megasena',
    name: 'Mega-Sena',
    component: Statistics
  },
  {
    path: '/estatisticas/lotofacil',
    name: 'Lotofácil',
    component: Statistics
  },
  {
    path: '/estatisticas/quina',
    name: 'Quina',
    component: Statistics
  },
  {
    path: '/estatisticas/lotomania',
    name: 'Lotomania',
    component: Statistics
  }
]
