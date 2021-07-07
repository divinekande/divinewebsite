<template>
  <v-row
      class="fill-height"
      align="center"
      justify="center"
  >
    <v-list class="overflow-y-auto" max-height="450">
      <template v-for="(item, i) in items">
        <v-col
            :key="i"
            cols="12"
        >
          <v-hover v-slot="{ hover }">
            <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
            >
              <v-img
                  :src="item.img"
                  height="225px"
                  width="1000"
              >
                <v-card-title class="text-h6 white--text">
                  <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.title }}
                    </p>
                    <div class="align-self-center">
                      <v-btn
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          @click="targetVideo(item)"

                          icon
                      >
                        <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                            x-large
                        >
                          mdi-play
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-list>
  </v-row>
</template>

<script>


export default {
  name: 'MultiVideosComponent',
  props : {
    playVideo : {
      type : Function
    }
  },
  data: () => ({
    icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
    currentVideo : null,
    items: [
      {
        title: 'COMMENT TROUVER UN STAGE FACILEMENT ??',
        text: `It's New Release Friday`,
        videoId : 'W2HhnHNGMPc',
        subtext: 'Newly released songs. Updated daily.',
        img: 'https://i.ytimg.com/vi/W2HhnHNGMPc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-f07txB9nK-HftgYK7UxcIlxUaw',
      },
      {
        title: 'COMMENT PARTIR AUX ÉTATS-UNIS POUR -500€ ?',
        text: 'Greatest Rock Hits',
        videoId : 'mi6BJ8RYB0Y',
        subtext: 'Lose yourself in rock tunes.',
        img: 'https://i.ytimg.com/vi/mi6BJ8RYB0Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8PfAIhGBMGsYfeD0QJ1SXwCZPog',
      },
      {
        title: 'hawaii (en musique) | DIVIBES',
        text: 'Ambient Bass',
        videoId : 'sqiUyU1JOwo',
        subtext: 'Chill beats to mellow you out.',
        img: 'https://i.ytimg.com/vi/sqiUyU1JOwo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIm6VZFMyd4at90euTRtxq0QjECA',
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
  methods : {
      targetVideo : function(video) {
        if(video) {
          this.playVideo(video.videoId)
        }
      }
  }
}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
