import Vue from 'vue'
import VueRouter from 'vue-router'

require('./bootstrap');

Vue.use(VueRouter);

Vue.component('navbar', require('./components/layouts/Navbar.vue'));
Vue.component('float-box', require('./components/widgets/box/FloatBox.vue'));
Vue.component('simple-navbar', require('./components/widgets/navbar/SimpleNavbar.vue'));
Vue.component('laravel-format-pagination', require('./components/widgets/pagination/LaravelFormatPagination.vue'));

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./components/articles/Index.vue') },
    { path: '/about', component: require('./components/About.vue') }
  ]
});

const app = new Vue({
  router,
  el: '#app'
});
