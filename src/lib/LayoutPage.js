import { map, merge } from 'lodash'

const MenuItem = {
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  render (h, { props, parent }) {
    return h('li', {
      class: {
        'uk-active': parent.$root.currentRoute === props.path
      }
    }, [
      h('a', {
        on: {
          click: function () {
            parent.$root.currentRoute = props.path
            window.history.pushState(
              null,
              parent.$root.routes[props.path],
              props.path
            )
          }
        }
      }, [ props.name ])
    ])
  }
}

export default {
  name: 'VkDocsLayoutPage',
  functional: true,
  render (h, { children, props, parent, data }) {
    // prepare menu items
    const menuItems = map(parent.$root.routes, (route, path) => {
      return h(MenuItem, merge({
        props: {
          name: route.name,
          path
        }
      }, data))
    })
    const menuItemsOffcanvas = map(parent.$root.routes, (route, path) => {
      return h(MenuItem, merge({
        props: {
          name: route.name,
          path
        }
      }, data))
    })
    return (
      <div class="vk-docs-layout vk-docs-layout-page">
        <nav class="uk-navbar">
          <a href="#tm-offcanvas"
            class="uk-navbar-toggle uk-visible-small"
            data-uk-offcanvas>
          </a>
        </nav>
        <div id="tm-offcanvas" class="uk-offcanvas">
          <div class="uk-offcanvas-bar">
            <ul class="uk-nav tm-nav">{
              menuItemsOffcanvas
            }</ul>
          </div>
        </div>
        <div class="uk-block">
          <div class="uk-container uk-container-center">
            <div class="uk-grid" data-uk-grid-margin>
              <div class="tm-sidebar uk-width-medium-1-4 uk-hidden-small">
                <ul class="uk-nav tm-nav">{
                  menuItems
                }</ul>
              </div>
              <div class="uk-width-medium-3-4">
                <article class="uk-article">
                  { children }
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
