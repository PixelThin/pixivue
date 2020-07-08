import * as Transitions from './utilities/transitions'
import pCountrySelect from './components/p-country-select.vue'
import pError from './components/p-error.vue'
import pSplit from './components/p-split.vue'
import pTranslucentBackground from './components/p-translucent-background.vue'
import pEmbeddedVideo from './components/video-component/p-embedded-video'
export { Transitions, pCountrySelect, pError, pSplit, pTranslucentBackground }
export default {
    install(Vue) {
        Vue.mixin({
            components: {
                pCountrySelect, pError, pSplit, pTranslucentBackground,pEmbeddedVideo
            }
        })
    }
}
