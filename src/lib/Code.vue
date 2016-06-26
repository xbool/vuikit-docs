<template>
  <pre v-html="code | beautify | highlight"></pre>
</template>

<script>
import beautify from 'js-beautify'
import hljs from 'highlight.js/lib/highlight'

export default {
  init () {
    // init html highlighting
    hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'))
  },
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  compiled () {
    if (!this.code && this._slotContents) {
      // if no code provided retrieve it from default slot
      const div = document.createElement('div')
      const fragment = this._slotContents.default
      div.appendChild(fragment.cloneNode(true))
      this.code = div.innerHTML.trim()
    }
  },
  filters: {
    beautify (str) {
      return beautify.html(str, {
        wrap_attributes: 'force',
        wrap_attributes_indent_size: 2,
        indent_size: 2
      })
    },
    highlight (str) {
      return hljs.highlight('html', str).value
    }
  }
}
</script>
