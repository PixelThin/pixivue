# pixivue

## To add to your project
```
yarn install pixivue
```

## To Use:
---
* NOTE: Currently, this project requires that components be imported as Vue Single File Components (SFC) due to its dependency on Vuetify. Transitions, utility methods, mixins, etc. can be imported directly

* NOTE: Pixivue components have peer dependencies on axios, Vuetify and vue-scroll-reveal
---
### Scroll-reveal transitions:
```
// In a Vue SFC

<template>
   <div v-scroll-reveal="fadeIn">Hello World</div>
</template>

<script>
import { Transitions } from 'pixivue'
export default {
        data: () => ({
    fadeIn: Transitions.fadeIn
  }),
}
</script>
```
### Pixivue components
```
// In your SFC
<template>
    <p-section>Hello World</p-section>
</template>

<script>
import pSection from 'pixivue/components/p-section.vue'
export default {
    components: {
        pSection
    }
}
</script>
```

## Peer Dependencies
Pixivue components depend upon Vuetify and axios. You must add these as dependencies to your project.
