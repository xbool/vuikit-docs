<template>
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
    <!-- TABS -->
    <vk-tabs>
      <vk-tab label="Example">
        <vk-docs-code :code="code"></vk-docs-code>
      </vk-tab>
      <vk-tab label="Result">
        <vk-docs-slots :slots="slots"></vk-docs-slots>
      </vk-tab>
    </vk-tabs>
  </div>
</template>

<script>
export default {
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
