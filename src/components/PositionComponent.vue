<template>
  <v-col cols="12"
         class="pa-0">
    <v-img src="positionUpWave.svg" height="140" class="imgup"/>
    <v-row style="background-color: #0a0a0a">
      <v-col class="mb-4 d-flex justify-center white--text" cols="6" >
        <h3>J'Y SERAI <br>PROCHAINEMENT</h3>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <v-icon x-large  color="green darken-2">
          mdi-map-marker
        </v-icon>
        <h1 class="white--text">Afrique du Sud</h1>
      </v-col>
    </v-row>
    <v-img src="positionWave.svg" height="140" class="image"/>
  </v-col>
</template>

<script>
  export default {
    name: 'PositionComponent',

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
    }),
  }
</script>

<style>
.image {
  transform: rotate(180deg);
}

.imageup {
  transform: rotate(180deg);
}
</style>

