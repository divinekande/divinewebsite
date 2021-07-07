<template>
  <v-col
      class="pa-0"
      cols="12"
      style="background-color: #030303"
  >
    <v-row  class="d-flex justify-center mt-0">
      <v-col cols="8">
        <v-row>
          <v-col cols="12" class="d-flex justify-center mb-4">
            <v-btn
                class="mx-2"
                fab
                dark
                large
                color="error"
                href="https://www.instagram.com/divineknd/" target="_blank"
            >
              <v-icon dark>
                mdi-instagram
              </v-icon>
            </v-btn>
            <v-btn
                class="mt-4 white--text"
                text
                v-ripple="false"
                href="https://www.instagram.com/divineknd" target="_blank"
            >
              SUIVEZ MES AVENTURES SUR INSTAGRAM
            </v-btn>
          </v-col>
          <v-col
              v-for="card in cards"
              :key="card.image"
              cols="3"
          >
            <v-card>
              <v-hover v-slot="{ hover }">
                <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    :style="hover ? 'opacity: 0.6' : 'opacity: 1'"
                >
                  <a
                      :href="card.link"
                      target="_blank"
                  >
                    <v-img
                        :src="card.image"
                    >
              <span
                  class="text-h5 white--text pl-4 pt-4 d-inline-block"
                  v-text="card.title"
              ></span>
                    </v-img>
                  </a>
                </v-card>
              </v-hover>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-img src="instaWave.svg" height="160" />
  </v-col>
</template>
<script>
  export default {
    name: 'InstagramComponent',

    data: () => ({
      types: ['Places to Be', 'Places to See'],
      cards: [
        {
          title : "",
          image : "img1.jpeg",
          link : "https://www.instagram.com/p/CQ8pUwctffL/"
        },
        {
          title : "",
          image : "img2.jpeg",
          link : "https://www.instagram.com/p/CPgXw_ZN-Lp/"
        },
        {
          title : "",
          image : "img3.jpeg",
          link : "https://www.instagram.com/p/CNSRNhMhnlw/"
        },
        {
          title : "",
          image : "img4.jpeg",
          link : "https://www.instagram.com/p/CM5KI3yhZu2/"
        },
        {
          title : "",
          image : "img5.jpeg",
          link : "https://www.instagram.com/p/CMt0rXYJikq/"
        },
        {
          title : "",
          image : "img6.jpeg",
          link : "https://www.instagram.com/p/CMIaC5dBieq/"
        },
        {
          title : "",
          image : "img7.jpeg",
          link : "https://www.instagram.com/p/CMAwuIZiJmD/"
        },
        {
          title : "",
          image : "img8.jpeg",
          link : "https://www.instagram.com/p/CJV3txFBI08/"
        },

      ],
      transparent: 'rgba(255, 255, 255, 0)',
      socials: [
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
        }
      ],
    }),
    methods: {
      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      },
    },
  }
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}
.v-content .v-card.v-sheet.theme--light {
  background-color: #ffffff !important;
  border-left: 5px solid red !important
}
.wave-container {
  margin: 0;
  position: relative;
  background: #ff00d5;
  color: #FFF;
  text-align: center;
  overflow: hidden;
}
</style>
