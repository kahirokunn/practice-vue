import Vue from 'vue'

require('./bootstrap');
import {
  store
} from './store.js'
import {
  router
} from './router.js'

Vue.component('navbar', require('./components/layouts/Navbar.vue'));
Vue.component('float-box', require('./components/widgets/box/FloatBox.vue'));
Vue.component('simple-navbar', require('./components/widgets/navbar/SimpleNavbar.vue'));
Vue.component('laravel-format-pagination', require('./components/widgets/pagination/LaravelFormatPagination.vue'));
Vue.component('page-loader', require('./components/widgets/loader/PageLoader.vue'));
Vue.component('widget-loader', require('./components/widgets/loader/WidgetLoader.vue'));

Vue.config.performance = true;

const app = new Vue({
  router,
  el: '#app',
  store
});

router.onReady(() => {
  store.commit('finishPaginate')
})

router.beforeEach((to, from, next) => {
  store.commit('startPaginate')
  setTimeout(() => next(), 300)
});

router.afterEach((to, from) => {
  store.commit('finishPaginate')
});
