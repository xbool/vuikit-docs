<template>
  <div>
    <nav class="uk-navbar">
      <a href="#tm-offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
    </nav>
    <div id="tm-offcanvas" class="uk-offcanvas">
      <div class="uk-offcanvas-bar">
        <ul class="uk-nav tm-nav uk-nav-offcanvas">
          <li v-for="(item, path) in menu" v-link-active>
            <a v-link="path"
              v-text="item">
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
              <li v-for="(item, path) in menu" v-link-active>
                <a v-link="path"
                  v-text="item">
                </a>
              </li>
            </ul>
          </div>
          <div class="uk-width-medium-3-4">
            <article class="uk-article">
              <router-view></router-view>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { each } from 'lodash'

export default {
  computed: {
    // recreates a menu from the routes
    // didn't found a better way...
    menu () {
      const menu = {}
      const routes = this.$router._recognizer.names
      each(routes, (route, name) => {
        menu[name] = '/' + route.segments[0].string
      })
      return menu
    }
  }
}
</script>

<style>
/*
 * Blocks
 */

.tm-middle,
.tm-footer { padding: 50px 0; }

/*
 * Nav
 */
.tm-nav > li > a:hover,
.tm-nav > li > a:focus,
.tm-nav > li.uk-active > a {
  background: #F5F5F5;
  color: #444;
}

/*
 * Sidebar
 */
.tm-sidebar {
  border-right: 1px solid #E5E5E5;
  margin-right: -1px !important;
}

/*
 * Docs pages
 */
.tm-docs-subtitle {
  margin: 60px 0 0 0;
}

/*
 * Responsive
 */
@media (min-width: 501px) and (max-width: 959px) {
  .tm-docs-hidden-medium {
    display: none !important;
  }
}
@media (max-width: 500px) {
  .tm-docs-hidden-small {
    display: none !important;
  }
}
</style>
