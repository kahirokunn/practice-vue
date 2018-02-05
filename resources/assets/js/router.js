import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./components/articles/Index.vue')},
    { path: '/about', component: require('./components/About.vue')}
  ]
})
