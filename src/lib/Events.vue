<template>
  <table class="vk-docs-events uk-table uk-table-striped uk-table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th class="uk-text-center">Emited</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, name) in events"
        class="uk-table-middle">
        <td class="uk-text-nowrap" v-text="name"></td>
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
import { each } from '../util'

const timouts = {}

export default {
  name: 'VkDocsEvents',
  watch: {
    'events': {
      deep: true,
      handler (val) {
        // some event was emited, reset it
        each(this.events, (obj, eventName) => {
          clearTimeout(timouts[eventName])
          timouts[eventName] = setTimeout(() => {
            // revert value after
            Vue.set(obj, 'emited', false)
          }, 600)
        })
      }
    }
  },
  props: {
    events: {
      type: Object,
      required: true
    }
  }
}
</script>
