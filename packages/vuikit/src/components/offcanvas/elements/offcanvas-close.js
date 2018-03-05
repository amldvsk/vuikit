import IconClose from 'vuikit/src/icons/close-icon'
import IconCloseLarge from 'vuikit/src/icons/close-large'
import mergeData from 'vuikit/src/util/vue-data-merge'

export default {
  functional: true,
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },
  render (h, { data, props }) {
    const { large } = props

    const def = {
      class: ['uk-offcanvas-close uk-close uk-icon', {
        'uk-close-large': large
      }],
      attrs: {
        type: 'button'
      }
    }

    return h('button', mergeData(data, def), [
      h(large ? IconCloseLarge : IconClose)
    ])
  }
}