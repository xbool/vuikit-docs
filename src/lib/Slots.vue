<template>
  <table class="vk-docs-slots uk-table uk-table-striped uk-table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, name) in slots"
        class="uk-table-middle">
        <td class="uk-text-nowrap" v-text="name"></td>
        <td v-html="row.description"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'VkDocsSlots',
  props: {
    slots: {
      type: Object,
      required: true
    }
  }
}
</script>
