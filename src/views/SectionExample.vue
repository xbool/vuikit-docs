<template>
  <div>
    <h2>Section Example</h2>
    <hr class="uk-article-divider">
    {{ props.group.value }}
    <!-- DEMO -->
    <vk-button-radio vk-docs-demo
      :value.sync="props.value.demo.value"
      :group="props.group.demo.value">
      <vk-button
        value="1"
        :color="props.color.value">
        1
      </vk-button>
      <vk-button active
        value="2"
        :color="props.color.value">
        2
      </vk-button>
      <vk-button
        value="3"
        :color="props.color.value">
        3
      </vk-button>
    </vk-button-radio>
    <!-- DESC -->
    <div class="uk-margin-large">
      For demo purposes we are displaying a VkButtonRadio which props and options
      illustrates well the <code>vk-docs-section</code> capabilites.
    </div>
    <!-- TABS -->
    <vk-tabs>
      <vk-tab label="Props">
        <vk-docs-props :props="props"></vk-docs-props>
      </vk-tab>
      <vk-tab label="Slots">
        <!-- <table-slots :rows="slots"></table-slots> -->
      </vk-tab>
      <vk-tab label="Events">
        <!-- <table-events :rows="events"></table-events> -->
      </vk-tab>
      <vk-tab label="Code">
        <!-- <pre><code v-code="demoCode"></code></pre> -->
      </vk-tab>
    </vk-tabs>
  </div>
</template>

<script>
import { merge, pick } from 'lodash'

const Component = require('vuikit').ButtonRadio

export default {
  data: () => ({
    props: merge(props, pick(Component.props, Object.keys(props))),
    slots,
    events,
    code
  })
}

const code =
`<vk-button-radio {props}>
  <vk-button value="1">1</vk-button>
  <vk-button value="2">2</vk-button>
  <vk-button value="3">3</vk-button>
</vk-button-radio>`

const props = {
  demo: {
    description: `If <code>demo</code> is not set or set to <code>false</code> the
      demo field will be ignored. If no prop has a demo set, the entire demo column
      will be ignored.`
  },
  value: {
    description: `For props with no specified type or with <code>demo.editable</code> set to false
      a demo will only render the value with no editing options.`,
    demo: {}
  },
  group: {
    description: 'For Boolean props a toggling checkbox will be displayed for the demo.',
    demo: {}
  },
  color: {
    description: `For the rest of props a set of demo options can be specified
      under <code>demo.options</code> as <code>Array</code> or <code>Object</code> of Key/Value pairs.`,
    demo: {
      options: ['primary', 'success', 'danger', 'link']
    },
    default: ''
  }
}

const slots = {
  default: {
    description: 'The button group inner text.'
  }
}

const events = {
  change: {
    description: 'Emited when a no active button is selected.'
  }
}
</script>
