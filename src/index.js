import * as Transitions from './utilities/transitions'
import pCountrySelect from './components/p-country-select.vue'
import pError from './components/p-error.vue'
import pSection from './components/p-section.vue'
import pSplit from './components/p-split.vue'
import pTranslucentBackground from './components/p-translucent-background.vue'
export { Transitions, pCountrySelect, pError, pSection, pSplit, pTranslucentBackground }
export default {
    install(Vue) {
        Vue.mixin({
            components: {
                pCountrySelect, pError, pSection, pSplit, pTranslucentBackground
            }
        })
    }
}
