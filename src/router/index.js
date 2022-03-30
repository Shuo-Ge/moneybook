import Vue from 'vue'
import VueRouter from 'vue-router'
const Detail = () => import('@/views/detail/Detail')
const Echars = () => import('@/views/echars/Echars')
const DetailType = () => import('@/views/readBook/DetailType')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/detail'
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/echars',
    component: Echars
  }, {
    path: '/detailType',
    component: DetailType
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
