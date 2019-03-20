// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import {wsutil} from './assets/js/wsutil.js'
import App from './App'
import router from './router'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  store : wsutil,
  template: '<App/>',
  components: {
    App
  }
})
