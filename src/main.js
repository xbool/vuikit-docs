import Vue from 'vue'
import VuikitDocs from './lib'
import routes from './routes'

const App = Vue.extend(require('./App'))

// install
Vue.use(VuikitDocs)

const app = new App({
  el: '#app',
  data: {
    routes,
    currentRoute: window.location.pathname !== '/'
      ? window.location.pathname
      : '/code'
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? matchingView.component
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
