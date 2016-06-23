<template>
  <div>
    <h2>Props</h2>
    <hr class="uk-article-divider">
    <!-- DEMO -->
    <vk-docs-props vk-ref-demo
      :props="props">
    </vk-docs-props>
    <!-- DESC -->
    <div class="uk-margin-large">
      <p>The <code>vk-docs-props</code> component renders a detailed table describing
      the component props. Optionally a demo field can be displayed for each prop with
      control inputs adapted to each type of prop.</p>
      <p>When the props object is properly shared bitween the demo and the table,
      the docs become interactive as seen in the
      <a href="http://vuikit.github.io/vuikit/" target="_blank">Vuikit main docs</a>.</p>
    </div>
  </div>
</template>

<script>
import { merge, pick } from 'lodash'

const Component = require('vuikit').ButtonRadio

export default {
  data: () => ({
    props: merge(props, pick(Component.props, Object.keys(props))),
    slots,
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
  prop: {
    description: 'Prop description explaining what is its purpose.',
    type: Boolean,
    default: false,
    demo: {}
  }
}

const slots = {
  default: {
    description: 'The button group inner text.'
  }
}
</script>
