import Layout from './Layout'
import Props from './Props'
import Events from './Events'
import Slots from './Slots'
import Code from './Code'

const plugin = {
  Layout,
  Props,
  Events,
  Slots,
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
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export {
  Layout,
  Props,
  Events,
  Slots,
  Code,
  plugin as default
}
