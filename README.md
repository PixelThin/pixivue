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
* NOTE: Currently, this project **requires your app be bootstrapped with the official vue-cli** due to its dependency on Vuetify. In most instance this isn't an issue and is transparent. If you would like this library to be exposed as a stand-alone library, please create an issue at https://github.com/PixelThin/pixivue/issues

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
    <p-translucent-background
      opacity=".3"
      imageSource="https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149_960_720.jpg"
      size="cover"
    >
      <div> My stuff goes here</div>
    </p-translucent-background>
</template>
```
### P-split example
NOTE: If you are pulling the image URL from a CMS (e.g. WordPress), use null or undefined for the default value

NOTE: Due to a bug in vue-scroll-reveal, changing the image source on the prop will not work correctly (see above for a
      workaround when no image source is initially present)
```
  <p-split :image="cmsContent.pSplitImage1" right class="mt-12" title="Welcome">
     Hello World
  </p-split>
```
### Embedded-video example
NOTE: If you are pulling the image URL from a CMS (e.g. WordPress), use null or undefined for the default value

NOTE: The embedded video component takes an object with properties title and URL
```

<template>
   <p-embedded-video video="video"></p-embedded-video>
   </template>
   <script>
   import pEmbeddedVideo from 'pixivue'
   export default{
   data(){
   video:{title:'title here',url:'https://youtu.be/dQw4w9WgXcQ'}
   },
   components:{ pEmbeddedVideo }
   }
   </script>
```
## Peer Dependencies
Pixivue components depend upon vue, vue-template-loader, babel, vuetify and axios. You must bootstrap your app with the vue-cli and Vuetify and Axios.
