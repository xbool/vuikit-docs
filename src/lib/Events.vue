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
      <tr v-for="(name, row) in events"
        class="uk-table-middle">
        <td v-text="name"></td>
        <td v-html="row.description"></td>
        <td class="uk-form uk-text-center">
          <i :class="{
            'uk-icon-circle': true,
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
    if (this.connect) {
      // listen for all events triggered by the demo
      each(this.events, (obj, name) => {
        this.connect.$on(name, () => {
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
    events: {
      type: Object,
      required: true
    },
    connect: {
      type: [Object, Boolean],
      default: false
    }
  }
}
</script>
