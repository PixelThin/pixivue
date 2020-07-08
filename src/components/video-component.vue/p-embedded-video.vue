<template>
  <div v-if="video" class="center">
    <!-- Lazy loading embedded video uses static thumbnail image until clicked by user -->
    <!-- This demonstrates a signifcant performance increase on page load, especially for many embedded videos-->
    <div class="youtube" @click="click">
      <!-- Thumbnail play-button overlay only displayed before click -->
      <div v-if="!isClicked" class="play-button"></div>
      <!-- Embedded video static thumbnail image -->
      <img :src="youtubeUrls.thumbnail" />
      <!-- Embedded video loads and autoplays only after click-->
      <iframe v-if="isClicked" :src="url" frameborder="0" allowfullscreen></iframe>
    </div>

    <h3 v-if="centered" class="text-center" v-html="video.title">
      <strong></strong>
    </h3>
     <h3 v-if="!centered" v-html="video.title">
       <strong></strong>
     </h3>
  </div>
</template>
<script>
import { getUrls } from "./youtube-data-extractor";
export default {
  data: function() {
    return {
      url: "",
      isClicked: false
    };
  },
  computed: {
    youtubeUrls() {
      return getUrls(this.video.url);
    }
  },
  props: {
    video: undefined,
    showTitle: false,
    centered:false
  },
  methods: {
    click: function() {
      // We don't set the URL until the user clicks. This avoids loading the iFrame
      // until they actually want it.
      this.url = this.youtubeUrls.embedded;
      this.isClicked = true;
    }
  },
  components: {}
};
</script>

<style>
.youtube {
  background-color: #000;
  margin-bottom: 30px;
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
  cursor: pointer;
}

.youtube img {
  width: 100%;
  top: -16.84%;
  left: 0;
}

.youtube .play-button {
  width: 90px;
  height: 60px;
  background-color: #333;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  z-index: 1;
  opacity: 0.8;
  border-radius: 6px;
}

.youtube .play-button:before {
  content: "";
  border-style: solid;
  border-width: 15px 0 15px 26px;
  border-color: transparent transparent transparent #fff;
}

.youtube img,
.youtube .play-button {
  cursor: pointer;
}

.youtube img,
.youtube iframe,
.youtube .play-button,
.youtube .play-button:before {
  position: absolute;
}

.youtube .play-button,
.youtube .play-button:before {
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.youtube iframe {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
