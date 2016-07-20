<template>
  <vk-docs-layout-page>
    <div class="uk-block">
      <h2>Slots</h2>
      <hr class="uk-article-divider">
      <!-- DESC -->
      <div class="uk-margin-large">
        <p>The <code>vk-docs-slots</code> component renders a detailed table describing
        the component slots.</p>
        <p>The only prop required is <code>slots</code>, an Object defining the slots fields.
        For more information about the object defintion checkout the below example.</p>
      </div>
      <h3>Example</h3>
      <vk-docs-code>{{ code }}</vk-docs-code>
      <h3>Result</h3>
      <vk-docs-slots :slots="slots"></vk-docs-slots>
    </div>
  </vk-docs-layout-page>
</template>

<script>
export default {
  name: 'PageSlots',
  data: () => ({
    slots,
    code
  })
}

const code =
`<vk-docs-slots :slots="{
  foo: {
    description: 'The event description.'
  },
  bar: {
    description: 'Some other event description.'
  }
}"></vk-docs-slots>`

const slots = {
  foo: {
    description: 'The slot description.'
  },
  bar: {
    description: 'Some other slot description.'
  }
}
</script>
