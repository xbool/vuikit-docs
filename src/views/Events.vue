<template>
  <div>
    <h2>Events</h2>
    <hr class="uk-article-divider">
    <!-- DESC -->
    <div class="uk-margin-large">
      <p>The <code>vk-docs-events</code> component renders a detailed table describing
      the component events. Optionally an <i>emited</i> field can be displayed for each event
      which icon will light on when that event has been triggered. By default it will
      listen to the component events with an attribute <code>vk-ref-events</code> within the same
      context, as can be seen in the <a href="http://vuikit.github.io/vuikit/" target="_blank">Vuikit docs</a>.</p>
      <p>The only prop required is <code>events</code>, an Object defining the events fields.
      For more information about the object defintion checkout the below example.</p>
    </div>
    <!-- TABS -->
    <vk-tabs>
      <vk-tab label="Example">
        <vk-docs-code>
<vk-docs-events :events="{
  foo: {
    description: 'The event description.'
  },
  bar: {
    description: 'Some other event description.'
  }
}"></vk-docs-events>
        </vk-docs-code>
      </vk-tab>
      <vk-tab label="Result">
        <vk-docs-events
          :events="demoEvents">
        </vk-docs-events>
      </vk-tab>
    </vk-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    demoEvents
  })
}

const demoEvents = {
  foo: {
    description: 'The event description.'
  },
  bar: {
    description: 'Some other event description.'
  }
}
</script>
