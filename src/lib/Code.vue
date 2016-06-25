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

<style>
/*
 Highlight - github.com style (c) Vasily Polovnyov <vast@whiteants.net>
*/

.hljs-comment,
.hljs-quote {
  color: #998;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-subst {
  color: #333;
  font-weight: bold;
}

.hljs-number,
.hljs-literal,
.hljs-variable,
.hljs-template-variable,
.hljs-tag .hljs-attr {
  color: #008080;
}

.hljs-string,
.hljs-doctag {
  color: #d14;
}

.hljs-title,
.hljs-section,
.hljs-selector-id {
  color: #900;
  font-weight: bold;
}

.hljs-subst {
  font-weight: normal;
}

.hljs-type,
.hljs-class .hljs-title {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: #000080;
  font-weight: normal;
}

.hljs-regexp,
.hljs-link {
  color: #009926;
}

.hljs-symbol,
.hljs-bullet {
  color: #990073;
}

.hljs-built_in,
.hljs-builtin-name {
  color: #0086b3;
}

.hljs-meta {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style>
