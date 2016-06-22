import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Vuikit from 'vuikit'
import VuikitDocs from './lib'

Vue.use(Vuikit)
Vue.use(VuikitDocs)
Vue.use(VueRouter)

// init views router
const router = new VueRouter({
  linkActiveClass: 'uk-active'
})

router.map({
  '/section': {
    name: 'Section',
    component: require('./views/Section.vue')
  },
  '/button': {
    name: 'Button',
    component: require('./views/Button.vue')
  }
})
router.start(App, '#app')
