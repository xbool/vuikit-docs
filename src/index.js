import Pages from './components/Pages'
import Page from './components/Page'
import PageSection from './components/PageSection'
import TableProps from './components/TableProps'

const vuikitDocs = {
  Pages,
  Page,
  PageSection,
  TableProps,
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
  window.Vue.use(vuikitDocs)
}

export {
  Pages,
  Page,
  PageSection,
  TableProps,
  vuikitDocs as default
}
