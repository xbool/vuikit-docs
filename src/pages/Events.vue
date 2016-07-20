<template>
  <vk-docs-layout-page>
    <div class="uk-block">
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
      <h3>Example</h3>
      <vk-docs-code>{{ code }}</vk-docs-code>
      <h3>Result</h3>
      <demo-button
        @click.native="events.click.emited = true">
      </demo-button>
      <!-- <input ref="demo"></input> -->
      <vk-docs-events
        :events="events">
      </vk-docs-events>
    </div>
  </vk-docs-layout-page>
</template>

<script>
export default {
  name: 'PageEvents',
  data: () => ({
    events: {
      click: {
        description: 'Emited on value change.',
        emited: false
      }
    },
    code
  }),
  components: {
    demoButton: {
      render (h) {
        return (
          <button class='uk-button'>Button</button>
        )
      }
    }
  }
}

const code =
`<vk-button-radio>
  <vk-button>1</vk-button>
  <vk-button>2</vk-button>
</vk-button-radio>

<vk-docs-events :connect="$refs.demo" :events="{
  change: {
    description: 'Emited on value change.'
  }
}"></vk-docs-events>`
</script>
