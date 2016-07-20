<template>
  <vk-docs-layout-page>
    <div class="uk-block">
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
      <h3>Example</h3>
      <vk-docs-code language="json">{{ props | json }}</vk-docs-code>
      <h3>Result</h3>
      <vk-docs-props
        :props="props"
        @change="
          props[arguments[0]].demo.value = arguments[1]
        ">
      </vk-docs-props>
    </div>
  </vk-docs-layout-page>
</template>

<script>
export default {
  name: 'PageProps',
  data: () => ({
    props: {
      propA: {
        description: 'Prop without demo.'
      },
      propB: {
        type: 'Array',
        default: [0, 1, 3],
        description: 'Prop with demo overview.',
        demo: {
          type: 'Overview',
          value: [0, 1, 2]
        }
      },
      propC: {
        type: 'Boolean',
        default: false,
        description: 'Prop with a boolean value.',
        demo: {
          value: true
        }
      },
      propD: {
        type: 'Select',
        default: 1,
        description: 'Prop with multiple values options.',
        demo: {
          options: [
            { text: '1', value: 1 },
            { text: '0', value: 0 },
            { text: '[2]', value: [2] },
            { text: '[1, 3]', value: [1, 3] }
          ],
          value: 0
        }
      }
    }
  }),
  filters: {
    json: (value) => JSON.stringify(value)
  }
}
</script>
