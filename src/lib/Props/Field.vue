<script>
import Vue from 'vue'
import FieldBoolean from './FieldBoolean'
import FieldSelect from './FieldSelect'
import FieldOverview from './FieldOverview'

export default {
  name: 'Demo',
  components: {
    FieldBoolean,
    FieldSelect,
    FieldOverview
  },
  render (h) {
    const field = `Field${this.type}`
    if (!this.$options.components[field]) {
      Vue.util.warn(`The VkDocsProps '${this.name}' field is not of a valid type.`)
    } else {
      return h(field, {
        props: {
          value: this.value,
          options: this.options,
          def: this.def
        },
        on: {
          change: (value) => {
            this.$emit('change', value)
          }
        }
      })
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    def: {
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>
