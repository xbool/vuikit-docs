<template>
  <div>
    <vk-docs-section
      component="alert"
      code-slot="Alert!"
      :props="props"
      :slots="slots">
      <div slot="demo">
        <vk-docs-table-props></vk-docs-table-props>
      </div>
      <div slot="desc">
        The desc
      </div>
    </vk-docs-section>
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
