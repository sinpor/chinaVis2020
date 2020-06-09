import Vue from 'vue'
import VueRouter from 'vue-router'
import Option from '../pages/options'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Option',
    component: Option
  },
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
