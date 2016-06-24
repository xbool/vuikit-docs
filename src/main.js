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
  '/props': {
    name: 'Props',
    component: require('./views/Props.vue')
  },
  '/events': {
    name: 'Events',
    component: require('./views/Events.vue')
  },
  '/slots': {
    name: 'Slots',
    component: require('./views/Slots.vue')
  },
  '/code': {
    name: 'Code',
    component: require('./views/Code.vue')
  },
  '/section-example': {
    name: 'Section Example',
    component: require('./views/SectionExample.vue')
  }
})
router.start(App, '#app')
