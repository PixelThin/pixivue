// export InfoSection from './components/info-section.vue'
import PSection from './components/p-section'
import PSplit from './components/p-split.vue'
import PError from './components/p-error.vue'
import PCountrySelect from './components/p-country-select'
import * as Transitions from './utilities/transitions'

export { PSplit, PError, Transitions, PSection, PCountrySelect }
export default {
    install(Vue) {

        // 3. inject some component options
        Vue.mixin({
            components: {
                PSplit,
                PError,
                PSection,
                PCountrySelect
            }
        })
    }
}
