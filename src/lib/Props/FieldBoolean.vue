<template>
  <input type="checkbox" :checked="value" @change="$emit('change', !value)">
</template>

<script>
//
export default {
  name: 'Boolean',
  props: {
    value: {
      required: true
    }
  }
}
</script>
