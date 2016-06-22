import Docs from './Docs'
import Section from './Section'

const plugin = {
  Docs,
  Section,
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
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export {
  Docs,
  Section,
  plugin as default
}
