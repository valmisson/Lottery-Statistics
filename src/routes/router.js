import Home from '@views/Home.vue'

const Statistics = () => import(/* webpackChunkName: "statistics" */ '@views/Statistics.vue')
const Results = () => import(/* webpackChunkName: "statistics" */ '@views/Results.vue')

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
  },
  {
    path: '/resultados/megasena',
    name: 'Mega-Sena',
    component: Results
  },
  {
    path: '/resultados/lotofacil',
    name: 'Lotofácil',
    component: Results
  },
  {
    path: '/resultados/quina',
    name: 'Quina',
    component: Results
  },
  {
    path: '/resultados/lotomania',
    name: 'Lotomania',
    component: Results
  }
]
