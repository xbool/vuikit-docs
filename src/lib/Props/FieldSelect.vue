<template>
  <div class="uk-form-select">
    <a href="" v-text="value === undefined || value.length === 0 || value === def
      ? '<>'
      : value">
    </a>
    <select ref="select"
      @change="$emit('change', selected)">
      <option v-for="option in options"
        :value="option.value"
        v-text="option.text">
      </option>
    </select>
  </div>
</template>

<script>
import { findKey } from 'lodash'

export default {
  name: 'Select',
  props: {
    value: {
      required: true
    },
    def: {
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.updateSelect()
  },
  watch: {
    value () {
      this.updateSelect()
    }
  },
  computed: {
    selected: {
      cache: false,
      get () {
        return this.$refs.select
          ? this.options[this.$refs.select.selectedIndex].value
          : this.value
      }
    }
  },
  methods: {
    updateSelect () {
      this.$refs.select.selectedIndex = findKey(
        this.options, { value: this.value }
      )
    }
  }
}
</script>
