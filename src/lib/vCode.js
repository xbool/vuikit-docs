import beautify from 'js-beautify'
import hljs from 'highlight.js/lib/highlight'

// init highlight language
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'))

export default {
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
    // add new line on first attr for main component
    .replace(/^<vk-(\S*) (\S*)/, '<vk-$1\n  $2')
  },
  highlight (str) {
    return hljs.highlight('html', str).value
  }
}
