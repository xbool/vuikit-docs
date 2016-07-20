<template>
  <span v-html="overview"></span>
</template>

<script>
import { isArray, isObject, isEmpty } from 'lodash'

export default {
  name: 'Overview',
  props: {
    value: {
      required: true
    },
    def: {
      required: true
    }
  },
  computed: {
    overview () {
      if (isArray(this.value)) {
        return `<code>[ ${this.value.length} ]</code>`
      }
      if (isObject(this.value)) {
        return isEmpty(this.value)
          ? '<code>{}</code>'
          : '<code>{...}</code>'
      }
      return this.value
    }
  }
}
</script>
