<template>
  <div>
    <h2 class="tm-docs-subtitle" v-text="title"></h2>
    <hr class="uk-article-divider">
    <div class="uk-margin-large">
      <slot></slot>
    </div>
    <vk-tabs>
      <vk-tab label="Props" v-if="props">
        <table-props :rows="props"></table-props>
        <span class="uk-hidden-large uk-text-small uk-text-muted">
          Note: Rotate the screen to see the rest of the options.
        </span>
      </vk-tab>
      <vk-tab label="Slots" v-if="slots">
        <table-slots :rows="slots"></table-slots>
      </vk-tab>
      <vk-tab label="Events" v-if="events">
        <table-events :rows="events"></table-events>
      </vk-tab>
      <vk-tab label="Code" v-if="code">
        <pre><code v-code="demoCode"></code></pre>
      </vk-tab>
    </vk-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import vCode from '../directives/code'
import TableProps from '../components/TableProps'
import TableEvents from '../components/TableEvents'
import TableSlots from '../components/TableSlots'
import {
  mapValues,
  pickBy,
  each,
  isEqual,
  isEmpty,
  isArray,
  isObject,
  kebabCase
  // reduce
} from 'lodash'

export default {
  ready () {
    const demoEl = getElementsByAttribute('vk-docs-demo', this.$el)[0]
    if (demoEl) {
      each(this.events, (obj, name) => {
        // init emited property
        // Vue.set(obj, 'emited', false)
        // fires emited signal when events triggered
        demoEl.__vue__.$on(name, () => {
          Vue.set(obj, 'emited', true)
          // revert value after
          setTimeout(() => {
            Vue.set(obj, 'emited', false)
          }, 400)
        })
      })
    }
  },
  components: {
    TableProps,
    TableEvents,
    TableSlots
  },
  data: () => ({
    showEvents: false
  }),
  props: {
    title: {
      type: String,
      default: ''
    },
    demo: {
      type: [Object, Boolean],
      default: false
    },
    props: {
      type: [Object, Boolean],
      default: false
    },
    events: {
      type: [Object, Boolean],
      default: false
    },
    slots: {
      type: [Object, Boolean],
      default: false
    },
    code: {
      type: String,
      default: ''
    }
  },
  computed: {
    demoCode () {
      const propsDefaults = mapValues(this.props, prop => typeof prop.default === 'function'
        ? prop.default.call()
        : prop.default)
      // get demo props which value differ from defaults
      const demoProps = pickBy(mapValues(this.props, 'value'), (value, key) => {
        return value !== undefined && !isEqual(value, propsDefaults[key])
      })
      // convert props to attributes
      var attrs = toAttrs(demoProps)
      // replace attrs and return the final code
      return this.code.replace('{props}', attrs)
    }
  },
  directives: {
    code: vCode
  }
}

/*
 * Converts an Object to String as node attributes
 */
function toAttrs (props) {
  let attrs = ''
  each(props, (value, key) => {
    // literal trues can be set without value, eg. disabled
    if (value === true) {
      value = ''
    }
    // literal numbers requires binding (:) to be evaluated as such
    if (Number.isInteger(value) || value === false) {
      key = `:${key}`
    }
    // Arrays and Objects
    if (isArray(value) || isObject(value)) {
      // skip if empty
      if (isEmpty(value)) {
        return true
      }
      // convert into literal
      value = JSON.stringify(value)
      // convert double quotes
      value = value.replace(/"/g, '\'')
      // bind is required
      key = `:${key}`
    }
    attrs += value
      ? `${kebabCase(key)}="${value}" `
      : `${kebabCase(key)} `
  })
  return attrs
}

/*
 * Get DOM elements by attribute
 */
function getElementsByAttribute (attribute, container) {
  const matchingElements = []
  const allElements = (container || document).getElementsByTagName('*')
  for (let i = 0, n = allElements.length; i < n; i++) {
    if (allElements[i].getAttribute(attribute) !== null) {
      matchingElements.push(allElements[i])
    }
  }
  return matchingElements
}
</script>

<style>
/*
 Highlight - github.com style (c) Vasily Polovnyov <vast@whiteants.net>
*/

.hljs-comment,
.hljs-quote {
  color: #998;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-subst {
  color: #333;
  font-weight: bold;
}

.hljs-number,
.hljs-literal,
.hljs-variable,
.hljs-template-variable,
.hljs-tag .hljs-attr {
  color: #008080;
}

.hljs-string,
.hljs-doctag {
  color: #d14;
}

.hljs-title,
.hljs-section,
.hljs-selector-id {
  color: #900;
  font-weight: bold;
}

.hljs-subst {
  font-weight: normal;
}

.hljs-type,
.hljs-class .hljs-title {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: #000080;
  font-weight: normal;
}

.hljs-regexp,
.hljs-link {
  color: #009926;
}

.hljs-symbol,
.hljs-bullet {
  color: #990073;
}

.hljs-built_in,
.hljs-builtin-name {
  color: #0086b3;
}

.hljs-meta {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style>
