import Docs from './Docs'
import Section from './Section'
import Props from './Props'
import Code from './Code'
import vCode from './vCode'

const plugin = {
  Docs,
  Section,
  Props,
  Code,
  install (Vue) {
    if (this.installed) {
      return
    }
    const keys = Object.keys(this)
    keys.pop() // remove 'install' from keys
    let i = keys.length
    while (i--) {
      Vue.component(`VkDocs${keys[i]}`, this[keys[i]])
    }
    // declare directives
    Vue.directive('vk-code', vCode)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export {
  Docs,
  Section,
  Props,
  Code,
  plugin as default
}
