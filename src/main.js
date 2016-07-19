import Vue from 'vue'
import Vuikit from 'vuikit'
import VuikitDocs from './lib'
import routes from './route-config'

const App = Vue.extend(require('./App'))

// install
Vue.use(Vuikit)
Vue.use(VuikitDocs)

/* eslint-disable no-new */
new App({
  el: '#app',
  data: {
    routes
  }
})
