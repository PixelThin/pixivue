<template>
  <v-row align="center" class="info-section d-flex">
    <div
      v-if="image"
      class="d-md-none section-image background-image"
      :style="{ backgroundImage: `url(${image})`}"
    ></div>
    <v-col class="text-center" cols="12" md="8" :order="textOrder">
      <slot name="title">
        <div class="text-uppercase font-weight-light display-2 mb-6">{{ title }}</div>
      </slot>
      <div class="mx-12 text-left">
        <slot></slot>
      </div>
    </v-col>
    <v-col
      v-if="image"
      class="section-image-col text-center background-image align-self-stretch d-none d-md-flex"
      :style="{ backgroundImage: `url(${image})`}"
      cols="12"
      md="4"
      v-scroll-reveal="fadeIn"
    ></v-col>
  </v-row>
</template>
<style scoped>
.section-image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.15;
}

.section-image-col {
  min-height: 400px;
}

.info-section {
  min-height: 50vh;
  position: relative;
}
</style>
<script lang="ts">
import { fadeIn } from "../utilities/transitions";
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    fadeIn
  }),
  computed: {
    textOrder() {
      if (typeof this.right === "undefined") {
        return "first";
      } else {
        return "last";
      }
    }
  },
  props: ["title", "icon", "right", "image"]
});
</script>
