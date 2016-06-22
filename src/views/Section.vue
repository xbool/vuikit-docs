<template>
  <div>
    <vk-docs-section
      title="Section"
      :props="props">
      The <code>vk-docs-section</code> component will render a page section,
      the same one this text is displayed in. A section is focused on presenting
      a component demo, Props, Events and Slots as aplicable.
      </section>
    </div>
  </div>
</template>

<script>
import mixins from '../mixins'
import Component from '../lib/Section'
import { merge, pick } from 'lodash'

export default {
  mixins: [mixins],
  data: () => ({
    // merge with component props in order to get the defaults values
    props: merge(props, pick(Component.props, Object.keys(props))),
    slots
  })
}

const props = {
  title: {
    description: 'The title that will be displayed above each section.',
    demo: false
  },
  props: {
    description: 'The Object containing the Props API definition.'
  }
}

const slots = {
  default: {
    description: 'The container for the message of the alert.'
  }
}
</script>
