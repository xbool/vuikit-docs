import Vue from 'vue'
import App from './App'
import Page from './components/Page'
import TableProps from './components/TableProps'
import TableSlots from './components/TableSlots'
import TableEvents from './components/TableEvents'
import Vuikit from 'vuikit'

// init Vuikit
Vue.use(Vuikit)

// register global components
Vue.component('VkDocsPage', Page)
Vue.component('TableProps', TableProps)
Vue.component('TableSlots', TableSlots)
Vue.component('TableEvents', TableEvents)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  }
})
