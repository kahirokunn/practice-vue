import Vue from 'vue'
import VueRouter from 'vue-router'

require('./bootstrap');

Vue.use(VueRouter);

Vue.component('navbar', require('./components/layouts/Navbar.vue'));

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./components/articles/Index.vue') },
    { path: '/about', component: require('./components/About.vue') },
    // { path: '/articles/:id', component: require('./components/articles/Show.vue') },
  ]
});

const app = new Vue({
  router,
  el: '#app'
});
