<template>
  <div>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
        <tr>
          <th>Name</th>
          <th class="tm-docs-hidden-medium">Type</th>
          <th class="tm-docs-hidden-medium">Default</th>
          <th class="tm-docs-hidden-small">Description</th>
          <th class="tm-docs-hidden-small" v-if="renderDemo">Demo</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(name, prop) in props"
          class="uk-table-middle">
          <td v-text="name"></td>
          <td class="tm-docs-hidden-medium" v-text="prop.type | type"></td>
          <td class="tm-docs-hidden-medium uk-text-truncate">
            <code v-text="prop.default | stringify"></code>
          </td>
          <td class="tm-docs-hidden-small" v-html="prop.description"></td>
          <td v-if="prop.demo" is="Demo"
            class="tm-docs-hidden-small"
            :default="prop.default"
            :type="prop.type | type"
            :value.sync="prop.demo.value"
            :options="prop.demo.options"
            :editable="prop.demo.editable">
          </td>
          <td v-else
            class="tm-docs-hidden-small">
          </td>
        </tr>
      </tbody>
    </table>
    <span class="uk-hidden-large uk-text-small uk-text-muted">
      Note: Rotate the screen to see the rest of the options.
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
import { isObject, isArray, some, each } from 'lodash'
import Demo from './Demo'

export default {
  created () {
    each(this.props, prop => {
      // evaluate default
      if (prop.default && typeof prop.default === 'function') {
        prop.default = prop.default.call()
      }
      // set demo value
      if (prop.demo && prop.demo.value === undefined) {
        Vue.set(prop.demo, 'value', prop.default)
      }
    })
  },
  components: { Demo },
  props: {
    props: {
      type: Object,
      required: true
    }
  },
  computed: {
    renderDemo () {
      return some(this.props, prop => prop.demo !== undefined)
    }
  },
  filters: {
    type (type) {
      if (isArray(type)) {
        type = type.map(t => t.name).join(', ')
      } else if (type && type.name) {
        type = type.name
      }
      return type || '*'
    },
    stringify (value) {
      // special case if not empty object
      if (isObject(value) && Object.keys(value).length) {
        return '{...}'
      }
      // or non empty array
      if (isArray(value) && value.length) {
        return '[...]'
      }
      // no defined means any value accepted
      if (value === undefined) {
        return 'N/A'
      }
      // for the rest
      return JSON.stringify(value)
    }
  }
}
</script>
