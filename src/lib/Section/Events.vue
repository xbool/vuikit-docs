<template>
  <table class="uk-table uk-table-striped uk-table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th class="uk-text-center">Emited</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(name, row) in rows"
        class="uk-table-middle">
        <td v-text="name"></td>
        <td v-html="row.description"></td>
        <td class="uk-form uk-text-center">
          <i :class="{
            'uk-icon-circle-o': !row.emited,
            'uk-icon-circle': row.emited,
            'uk-text-success': row.emited
          }"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Vue from 'vue'
import { each } from 'lodash'

export default {
  ready () {
    // get demo element from context
    const demoNode = getElementsByAttribute('vk-docs-demo', this._context.$el)[0]
    if (demoNode) {
      // listen for all events triggered by the demo
      each(this.rows, (obj, name) => {
        demoNode.__vue__.$on(name, () => {
          Vue.set(obj, 'emited', true)
          setTimeout(() => {
            // revert value after
            Vue.set(obj, 'emited', false)
          }, 400)
        })
      })
    }
  },
  props: {
    rows: {
      type: Object,
      required: true
    }
  }
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
