import Layout from './Layout'
import LayoutPage from './LayoutPage'
import Props from './Props'
import Events from './Events'
import Slots from './Slots'
import Code from './Code'

const VuikitDocs = {
  Layout,
  LayoutPage,
  Props,
  Events,
  Slots,
  Code,
  install (Vue) {
    const keys = Object.keys(this)
    keys.pop() // remove 'install' from keys
    let i = keys.length
    while (i--) {
      Vue.component(`VkDocs${keys[i]}`, this[keys[i]])
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuikitDocs)
}

module.exports = VuikitDocs
