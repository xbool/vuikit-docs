<template>
  <div>
    <vk-docs-section
      title="Section"
      :props="props"
      :code="code"
      :slots="slots">
      <div slot="demo">
        <vk-button
          :value.sync="props.value.value"
          :color="props.color.value"
          :size="props.size.value"
          :width="props.width.value"
          :icon-left="props.iconLeft.value"
          :icon-right="props.iconRight.value"
          :active="props.active.value"
          :disabled="props.disabled.value">
          Button
        </vk-button>
      </div>
      The <code>vk-button</code> component renders a standard button.
    </vk-docs-section>
  </div>
</template>

<script>
import mixins from '../mixins'
import { merge, pick } from 'lodash'

const Component = require('vuikit').Button

export default {
  mixins: [mixins],
  data: () => ({
    props: merge(props, pick(Component.props, Object.keys(props))),
    slots,
    code
  })
}

const code =
`// Some pre code
<vk-button {{attrs}}>
  Text
</vk-button>`

const props = {
  value: {
    description: 'The value of the button. Usually used in combination with others components.'
  },
  active: {
    description: 'Whether to present the button as active.'
  },
  disabled: {
    description: 'Whether to present the button as disabled.'
  },
  color: {
    description: `The color modifier accepting as values <code>primary</code>, <code>success</code>,
      <code>danger</code> or <code>link</code>.`,
    options: ['primary', 'success', 'danger', 'link']
  },
  size: {
    description: `The size modifier accepting as values <code>mini</code>, <code>small</code>,
      or <code>large</code>.`,
    options: ['mini', 'small', 'large']
  },
  width: {
    description: `The width of the button. Can be any class from the
      <a href="http://getuikit.com/docs/grid.html">UIkit Grid</a>
      without the <code>uk-width-</code> prefix.`,
    options: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-10']
  },
  iconLeft: {
    description: `The left icon of the button. Can be any icon of
      <a href="http://getuikit.com/docs/icon.html">UIkit icons</a>
      without the <code>uk-icon-</code> prefix.`,
    options: ['flag', 'microphone', 'gamepad']
  },
  iconRight: {
    description: `The right icon of the button. Can be any icon of
      <a href="http://getuikit.com/docs/icon.html">UIkit Icons</a>
      without the <code>uk-icon-</code> prefix.`,
    options: ['flag', 'microphone', 'gamepad']
  }
}

const slots = {
  default: {
    description: 'The button inner text.'
  }
}
</script>
