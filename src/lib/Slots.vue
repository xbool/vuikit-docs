<template>
  <table class="uk-table uk-table-striped uk-table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(name, row) in slots"
        class="uk-table-middle">
        <td v-text="name"></td>
        <td v-html="row.description"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    slots: {
      type: Object,
      required: true
    }
  }
}
</script>
