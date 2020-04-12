// export InfoSection from './components/info-section.vue'
import PSection from './components/p-section'
import PSplit from './components/p-split.vue'
import PError from './components/p-error.vue'
import PCountrySelect from './components/p-country-select'
import * as Transitions from './utilities/transitions'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

export { PSplit, PError, Transitions, PSection, PCountrySelect }
export default {
    install(Vue) {
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
