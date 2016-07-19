<template>
  <div>
    <nav class="uk-navbar">
      <a href="#tm-offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
    </nav>
    <div id="tm-offcanvas" class="uk-offcanvas">
      <div class="uk-offcanvas-bar">
        <ul class="uk-nav tm-nav uk-nav-offcanvas">
          <li v-for="(item, path) in menu"
            :class="{
              'uk-active': route === path
            }">
            <a v-text="item"
              @click="go(path)">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="tm-middle">
      <div class="uk-container uk-container-center">
        <div class="uk-grid" data-uk-grid-margin>
          <div class="tm-sidebar uk-width-medium-1-4 uk-hidden-small">
            <ul class="uk-nav tm-nav">
              <li v-for="(item, path) in menu"
                :class="{
                  'uk-active': route === path
                }">
                <a v-text="item"
                  @click="go(path)">
                </a>
              </li>
            </ul>
          </div>
          <div class="uk-width-medium-3-4">
            <article class="uk-article">
              <router-view :route="route"></router-view>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { each } from 'lodash'

export default {
  created () {
    // set initial route
    this.route = window.location.hash.replace('#!', '')
  },
  data: () => ({
    routes: {},
    route: '/code'
  }),
  computed: {
    // recreates a menu from the routes
    menu () {
      const menu = {}
      each(this.$root.routes, ($route, route) => {
        menu[$route.name] = route
      })
      return menu
    }
  },
  methods: {
    go (path) {
      window.location.replace('#!' + path)
      this.route = path
    }
  },
  components: {
    routerView: {
      template: '<div><component :is="component"></component></div>',
      props: {
        route: {
          type: String,
          required: true
        }
      },
      computed: {
        component () {
          return 'Vk' + Vue.util.classify(this.route)
        }
      },
      created () {
        each(this.$root.routes, ($route, route) => {
          const compName = 'Vk' + Vue.util.classify(route)
          if (!Vue.options.components[compName]) {
            Vue.component(compName, $route.component)
          }
        })
      }
    }
  }
}
</script>
