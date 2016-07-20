<script>
import beautify from 'js-beautify'
import hljs from 'highlight.js/lib/highlight'

hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

export default {
  name: 'VkDocsCode',
  render (h) {
    return h('pre', {
      domProps: {
        innerHTML: this.$slots.default
          ? this.formatCode(this.$slots.default[0].text)
          : ''
      }
    })
  },
  props: {
    language: {
      type: String,
      default: 'html'
    },
    beautifyOptions: {
      type: Object,
      default: () => ({
        wrap_attributes: 'force',
        wrap_attributes_indent_size: 2,
        indent_size: 2
      })
    }
  },
  methods: {
    formatCode (code) {
      // beautify it
      if (this.language === 'js' || this.language === 'json') {
        code = beautify.js(code, this.beautifyOptions)
      } else {
        code = beautify.html(code, this.beautifyOptions)
      }
      // highlight it
      return hljs.highlight(this.language, code).value
    }
  }
}
</script>
