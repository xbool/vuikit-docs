<template>
  <div>
    <vk-docs-pages>
      <vk-docs-page title="Props Table">
        <page-alert></page-alert>
      </vk-docs-page>
      <vk-docs-page title="Other">
        Some other
      </vk-docs-page>
    </vk-docs-pages>
  </div>
</template>

<script>
import PageAlert from './pages/Alert'

export default {
  components: {
    PageAlert
  }
}
</script>
