// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import axios from 'axios'
import qs from 'qs'
import iView from 'iview'    //引入ivew库
import 'iview/dist/styles/iview.css'
import first from '@/components/first'


Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$ajax=axios
Vue.config.productionTip = false
Vue.prototype.$qs=qs


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { first },
  template: '<first/>'
})
