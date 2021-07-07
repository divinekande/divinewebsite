<template>
  <v-col
      cols="8"
      class="pa-0"
  >
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between">
        <h1 class="display-2 font-weight-bold mb-3">
          Mes dernières vidéos
        </h1>
        <v-btn
            class="ma-1 rounded-xl"
            color="error"
            href="https://www.youtube.com/channel/UCWL4zsChu-u0GT5OrVdGhvQ"
            target="_blank"
            dark
        >
          S’ABONNER A MA CHAINE YOUTUBE
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="8">
            <youtube :video-id="videoId" player-width="770" player-height="440" :player-vars="autoplay"></youtube>
          </v-col>
          <v-col cols="4">
            <MultiVideosComponent
                :playVideo="playVideo"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import MultiVideosComponent from "@/components/MultiVideosComponent";

export default {
  name: 'VideosComponent',
  components :{
    MultiVideosComponent
  },
  data: () => ({
    videoId : "3g-mxErYtkg",
    autoplay : {autoplay: 0},
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
    ],
  }),
  methods: {
    ready (event) {
      this.player = event.target
    },
    playing (event) {
      console.log("Test event : ", event)
    },
    change () {
      this.videoId = 'another video id'
    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    },
    playVideo : function(videoId) {
      if(videoId) {
        this.videoId = videoId
        this.autoplay = {autoplay: 1}
      }
    }
  }
}
</script>
