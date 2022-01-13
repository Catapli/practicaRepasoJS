import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TableEmprises from '../views/TableEmprises'
import verOfertasEmpresa from '../views/verOfertasEmpresa'
import formOffer from '../views/formOffer'
import verEmpresa from '../views/verEmpresa'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/empresas',
    name:'TableEmprises',
    component: TableEmprises
  },
  {
    path:'/verOfertas/:id',
    name:'verOfertasEmpresa',
    component: verOfertasEmpresa,
    props: true
  },
  {
    path:'/formOffer',
    name:'formOffer',
    component: formOffer,
  },
  {
    path:'/verEmpresa/:id',
    name:'verEmpresa',
    component:verEmpresa,
    props:true
  },
  {
    path: '/formOffer/:id',
    name: 'Edit',
    component: formOffer,
    props:true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
