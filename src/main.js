import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuikit from 'vuikit'
import VuikitDocs from './lib'
import { configRouter } from './route-config'

// install
Vue.use(Vuikit)
Vue.use(VuikitDocs)
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  root: 'vuikit-docs',
  linkActiveClass: 'uk-active'
})

// configure router
configRouter(router)

// boostrap the app
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
