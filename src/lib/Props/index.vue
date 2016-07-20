<template>
  <div class="vk-docs-props">
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
        <tr>
          <th>Name</th>
          <th class="tm-docs-hidden-medium">Type</th>
          <th class="tm-docs-hidden-medium">Default</th>
          <th class="tm-docs-hidden-small">Description</th>
          <th v-if="hasDemoColumn"
            class="tm-docs-hidden-small"
            v-text="'Demo'">
          </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(prop, name) in props"
          class="uk-table-middle">
          <td class="uk-text-nowrap" v-text="name"></td>
          <td class="tm-docs-hidden-medium">
            {{ prop.type || '*' }}
          </td>
          <td class="tm-docs-hidden-medium uk-text-truncate">
            <code>{{ prop.default | stringify }}</code>
          </td>
          <td class="tm-docs-hidden-small" v-html="prop.description"></td>
          <td v-if="hasDemoColumn"
            class="tm-docs-hidden-small uk-form uk-text-truncate">
            <demo-field v-if="prop.demo"
              :name="name"
              :type="prop.demo.type || prop.type"
              :def="prop.default"
              :options="prop.demo.options"
              :value="prop.demo.value"
              @change="$emit('change', name, arguments[0])">
            </demo-field>
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
import { isObject, isArray, some } from 'lodash'
import DemoField from './Field'

export default {
  name: 'VkDocsProps',
  components: {
    DemoField
  },
  props: {
    props: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasDemoColumn () {
      return some(this.props, prop => prop.demo !== undefined)
    }
  },
  filters: {
    stringify (value) {
      // or non empty array
      if (isArray(value) && value.length) {
        return '[...]'
      }
      // special case if not empty object
      if (isObject(value) && Object.keys(value).length) {
        return '{...}'
      }
      // no defined means any value accepted
      if (value === undefined) {
        return '*'
      }
      // for the rest
      return JSON.stringify(value)
    }
  }
}
</script>
