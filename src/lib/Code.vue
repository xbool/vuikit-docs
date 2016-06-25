<template>
  <pre></pre>
</template>

<script>
import beautify from 'js-beautify'
import hljs from 'highlight.js/lib/highlight'
// init html highlighting
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'))

export default {
  compiled () {
    // retrieve content from default slot
    const div = document.createElement('div')
    const fragment = this._slotContents.default
    div.appendChild(fragment.cloneNode(true))
    let text = div.innerHTML.trim()
    // apply effects and set on code
    text = this.beautify(text)
    text = this.highlight(text)
    this.$el.innerHTML = text
  },
  methods: {
    update (value) {
      value = this.beautify(value)
      value = this.highlight(value)
      this.el.innerHTML = value
    },
    beautify (str) {
      return beautify.html(str, {
        wrap_attributes: 'force',
        wrap_attributes_indent_size: 2,
        indent_size: 2
      })
      // add new line for closing tags, if no children
      .replace(/><\/vk-(.*)>$/g, '>\n</vk-$1>')
    },
    highlight (str) {
      return hljs.highlight('html', str).value
    }
  }
}
</script>
