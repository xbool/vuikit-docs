<template>
  <div>
    <div class="uk-margin-large">
      The Events desc
    </div>
    <vk-tabs>
      <vk-tab label="Props" v-if="props">
        <vk-docs-table-props :rows="props"></vk-docs-table-props>
      </vk-tab>
      <vk-tab label="Slots" v-if="slots">
        <vk-docs-table-slots :rows="slots"></vk-docs-table-slots>
      </vk-tab>
      <vk-tab label="Events" v-if="events">
        <!-- <vk-docs-table-events :rows="events"></vk-docs-table-events> -->
      </vk-tab>
    </vk-tabs>
  </div>
</template>

<script>
import mixins from '../mixins'

export default {
  mixins: [mixins],
  data: () => ({
    props: props,
    slots
  })
}

const props = {
  show: {
    description: 'Display state that when toggled will hide/show the alert.'
  },
  color: {
    description: `The color modifier accepting as values <code>success</code>,
      <code>warning</code> or <code>danger</code>.`,
    options: ['success', 'warning', 'danger']
  },
  large: {
    description: 'Whether to increase the spacing arount the text.'
  },
  block: {
    description: 'Whether to allow hiding the alert by user action.'
  }
}

const slots = {
  default: {
    description: 'The container for the message of the alert.'
  }
}
</script>
