# pixivue

## To add to your project
```
vue-cli create my-new-app
cd my-new-app
vue-cli add vuetify
yarn add axios
yarn add pixivue
```

## To Use:
---
* NOTE: Currently, this project **requires your app be bootstrap with the official vue-cli** due to its dependency on Vuetify. In most instance this isn't an issue and is transparent. If you would like this library to be exposed as a stand-alone library, please create an issue at https://github.com/PixelThin/pixivue/issues

* NOTE: Pixivue components have peer dependencies on axios, Vuetify and vue-scroll-reveal

* NOTE: As of Pixivue 1.0.0, p-sections are no longer supported. We recommend you use v-container instead.
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
// In main.js
import Vue from 'vue'
import Pixivue from 'pixivue'
Vue.use(Pixivue)

// In your SFC
<template>
    <p-section>Hello World</p-section>
</template>
```

## Peer Dependencies
Pixivue components depend upon vue, vue-template-loader, babel, vuetify and axios. You must bootstrap your app with the vue-cli and Vuetify and Axios.
