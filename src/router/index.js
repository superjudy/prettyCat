import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import('../components/book/index.vue');
const bookSide = () => import('../components/book/bookSide.vue');
const dbHeader = () => import('../components/dbHeader.vue');

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
        default: dbHeader,
        main: index,
        aside: bookSide
      }
    },
  ],
  mode: 'history'
})
