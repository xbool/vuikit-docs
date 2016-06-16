import Vue from 'vue'
import App from './App'
import TableSlots from './components/TableSlots'
import TableEvents from './components/TableEvents'
import Vuikit from 'vuikit'
import VuikitDocs from './'

// init Vuikit
Vue.use(Vuikit)
Vue.use(VuikitDocs)

// register global components
Vue.component('TableSlots', TableSlots)
Vue.component('TableEvents', TableEvents)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  }
})
