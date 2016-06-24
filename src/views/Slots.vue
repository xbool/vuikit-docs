<template>
  <div>
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
        <vk-docs-code>
<vk-docs-slots :slots="{
  foo: {
    description: 'The event description.'
  },
  bar: {
    description: 'Some other event description.'
  }
}"></vk-docs-slots>
        </vk-docs-code>
      </vk-tab>
      <vk-tab label="Result">
        <vk-docs-slots
          :slots="demoSlots">
        </vk-docs-slots>
      </vk-tab>
    </vk-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    demoSlots
  })
}

const demoSlots = {
  foo: {
    description: 'The slot description.'
  },
  bar: {
    description: 'Some other slot description.'
  }
}
</script>
