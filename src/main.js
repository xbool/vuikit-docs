import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Vuikit from 'vuikit'
import VuikitDocs from './lib'

Vue.use(Vuikit)
Vue.use(VuikitDocs)
Vue.use(VueRouter)

// init views router
const router = new VueRouter()
router.map({
  '/events': {
    name: 'Table Events',
    component: require('./views/TableEvents.vue')
  },
  '/props': {
    name: 'Table Props',
    component: require('./views/TableProps.vue')
  }
})
router.start(App, '#app')
