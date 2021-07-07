<template>
  <div>
    <v-col
        cols="12"
        class="pa-0 parent"
    >
      <v-img
          dark
          src="screen1.png"
          height="800"
          class="image1"
      >
        <v-row   class="pa-16 mt-16">
          <v-col class="mb-4">
            <v-card-text class="display-2 font-weight-bold mb-3">
              BIENVENUE DANS<br>
              L’AVENTURE DIVIBES
            </v-card-text>
            <v-row>
              <v-col cols="12">
                <v-btn
                    class="ma-1 rounded-xl"
                    color="warning"
                    dark
                >
                  <v-icon
                      dark
                      left
                  >
                    mdi-airplane
                  </v-icon>
                  CLIQUEZ ICI POUR COMMENCER

                </v-btn>
                <v-btn
                    class="ma-2 rounded-xl"
                    color="error"
                    dark
                    href="https://www.youtube.com/channel/UCWL4zsChu-u0GT5OrVdGhvQ" target="_blank"
                >
                  <v-icon
                      dark
                      left
                  >
                    mdi-youtube
                  </v-icon>
                  VOIR MA CHAINE YOUTUBE
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-img>
      <v-img src="wlcomeWave.svg" height="240"  class="image2"/>
    </v-col>
  </div>
</template>

<script>
  export default {
    name: 'WelcomeComponent',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ]
    }),
  }
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green;
}
</style>
