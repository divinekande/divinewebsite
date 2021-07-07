<template>
  <v-col
      cols="12"
      class="pa-0 parent"
  >
    <v-img
        dark
        src="meetings.jpeg"
        height="900"
        class="image1"
    >
      <v-row  class="pa-16 mt-16">
        <v-card color="#475E73" class="text-center pa-8 rounded-xl">
          <v-card-title class="display-2 font-weight-bold mb-3">
            LA BONNE ADRESSE<br>
            DE LA SEMAINE
          </v-card-title>
          <v-card-text class="text-h5 font-weight-bold">
            DÉCOUVREZ CHAQUE SEMAINE <br>
            L’ADRESSE QUE J’AI CHOISI POUR VOUS<br>
          </v-card-text>
          <v-btn
              class="ma-1 rounded-xl"
              color="black"
              dark
          >
            EN SAVOIR PLUS
          </v-btn>
        </v-card>
      </v-row>
    </v-img>
    <v-img src="meetUpwave.svg" height="240"  class="image3"/>
    <v-img src="meetWave.svg" height="240"  class="image2"/>
  </v-col>
</template>

<script>
  export default {
    name: 'MeetingsComponent',

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
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
<style>
.parent {
  position: relative;
  top: 0;
  left: 0;
}
.image1 {
  position: relative;
  top: 0;
  left: 0;
  /*border: 1px red solid;*/
}
.image2 {
  position: absolute;
  bottom: 0;
  /*border: 1px green solid;*/
  width: 100%;
  height: 300px;
}

.image3 {
  position: absolute;
  top : 0;
  /*border: 1px green solid;*/
  width: 100%;
  height: 300px;
  transform: rotate(180deg);
}
</style>
