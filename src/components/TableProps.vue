<template>
  <table class="uk-table uk-table-striped uk-table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th class="tm-docs-hidden-medium">Type</th>
        <th class="tm-docs-hidden-medium">Default</th>
        <th class="tm-docs-hidden-small">Description</th>
        <th class="tm-docs-hidden-small" v-if="demo">Demo</th>
    </tr>
    </thead>
    <tbody>
      <tr v-else class="uk-table-middle" v-for="(name, prop) in rows">
        <td v-text="name"></td>
        <td class="tm-docs-hidden-medium" v-text="prop.type | type"></td>
        <td class="tm-docs-hidden-medium uk-text-truncate">
          <code v-text="prop.default | stringify"></code>
        </td>
        <td class="tm-docs-hidden-small" v-html="prop.description"></td>
        <td class="tm-docs-hidden-small" v-if="demo" is="PropsColDemo"
          :value.sync="prop.value"
          :default="prop.default"
          :type="prop.type | type"
          :demo="prop.demo"
          :options="prop.options"
          :editable="prop.editable">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { isObject, isArray, sortBy } from 'lodash'
import PropsColDemo from './TablePropsColDemo'

export default {
  components: { PropsColDemo },
  props: {
    rows: {
      type: Object,
      default: () => ({})
    },
    demo: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    sortedRows: function () {
      return sortBy(this.rows, 'order')
    }
  },
  filters: {
    type (type) {
      if (isArray(type)) {
        type = type.map(t => t.name).join(', ')
      } else if (type) {
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
