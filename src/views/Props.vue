<template>
  <div>
    <h2>Props</h2>
    <hr class="uk-article-divider">
    <!-- DESC -->
    <div class="uk-margin-large">
      <p>The <code>vk-docs-props</code> component renders a detailed table describing
      the component props. Optionally a demo field can be displayed for each prop with
      control inputs adapted to each type of prop. When the props object is properly
      shared bitween the demo and the component the docs become interactive as can be
      seen in the <a href="http://vuikit.github.io/vuikit/" target="_blank">Vuikit docs</a>.</p>
      <p>The only prop required is <code>props</code>, an Object defining the props fields following the
      same structure as Vue Component props definition, but with two additional fields,
      <code>description</code> and <code>demo</code>. For more information about the fields checkout
      the below example.</p>
    </div>
    <!-- TABS -->
    <vk-tabs>
      <vk-tab label="Example">
        <vk-docs-code>
<vk-docs-props :props="{
  foo: {
    type: 'String',
    default: '',
    description: 'Prop description',
    demo: {
      options: [1, 2, 3],
      value: 3
    }
  },
  bar: {
    type: 'Boolean',
    default: '',
    description: 'Prop description',
    demo: {
      value: true
    }
  }
}"></vk-docs-props>
        </vk-docs-code>
      </vk-tab>
      <vk-tab label="Result">
        <vk-docs-props
          :props="demoProps">
        </vk-docs-props>
      </vk-tab>
    </vk-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    demoProps
  })
}

const demoProps = {
  foo: {
    type: 'String',
    default: '',
    description: 'Prop description',
    demo: {
      options: [1, 2, 3],
      value: 3
    }
  },
  bar: {
    type: 'Boolean',
    default: false,
    description: 'Prop description',
    demo: {
      value: true
    }
  }
}
</script>
