import Home from '@views/Home.vue'

const Statistics = () => import(/* webpackChunkName: "statistics" */ '@views/Statistics.vue')

export default [
  {
    path: '/',
    redirect: '/estatistica/'
  },
  {
    path: '/estatistica/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estatistica/megasena',
    name: 'Mega-Sena',
    component: Statistics
  },
  {
    path: '/estatistica/lotofacil',
    name: 'Lotofácil',
    component: Statistics
  },
  {
    path: '/estatistica/quina',
    name: 'Quina',
    component: Statistics
  },
  {
    path: '/estatistica/lotomania',
    name: 'Lotomania',
    component: Statistics
  }
]
