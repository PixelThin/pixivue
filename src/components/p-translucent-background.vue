<template>
  <div class="position-relative width-100">
    <div
      class="background-image full-background"
      :style="{backgroundImage: `url(${imageSource})`, opacity: opacity, backgroundPosition: position}"
    ></div>
    <div class="background-container">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.position-relative {
  position: relative;
}
.width-100 {
  width: 100%;
}
.full-background {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
}
.background-container {
  position: relative;
}
</style>
<script lang="ts">
import Vue from "vue";
// translucent-background is a component that expands to fit the full
// size of it's parent and allows for setting a translucent background image
export default Vue.extend({
  props: {
    opacity: {},
    imageSource: {},
    position: {
      default: "cover"
    }
  }
});
</script>
