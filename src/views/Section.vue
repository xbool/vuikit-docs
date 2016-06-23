<template>
  <div>
    <vk-docs-section
      title="Section"
      :props="props">
      The <code>vk-docs-section</code> component will render a page section
      composed of a Title, Description and optional Demo, Props, Events and Slots tabs.
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
    description: 'The title that will be displayed above each section.'
  },
  props: {
    description: `The props Object definition, the same one used in the component
      with the following additional fields:
      <br />- <b>description</b>, the prop description you are reading now
      <br />- <b>demo</b>, the object defining the demo field`
  }
}

const slots = {
  default: {
    description: 'The container for the message of the alert.'
  }
}
</script>
