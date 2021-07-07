<template>
  <v-col
      class="pa-0"
      cols="12"
      style="background-color: #FAFAFC"
  >
    <v-img src="idWave.svg" height="200" class="image"/>
    <v-row class="d-flex justify-center mt-8 mb-4">
      <v-col cols="8">
        <v-row class="text-center">
          <v-col cols="12">
            <h1 class="display-2 font-weight-bold mb-3 black--text">
              MES PAYS VISITÉS
            </h1>
            <p class="subheading font-weight-regular mb-8 black--text">
              En ce moment je suis à : PARIS <br>
              Mais tu peux aussi découvrir les destinations que j’ai déjà explorées !
            </p>
          </v-col>
          <v-col cols="10">
            <Map
                lowColor="#DB5461"
                highColor="#DB5461"
                :countryData="countryData"
                defaultCountryFillColor="#F3F4F5"
            />
          </v-col>
          <v-col cols="2">
            <v-treeview :items="items"></v-treeview>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Map from 'vue-world-map'
export default {
    name: 'TravelComponent',
    components : {Map},
    data: () => ({
      countryData : {
        US: 100,
        CA: 120,
        UK: 400,
        ZA: 400,
        MA : 400,
        NG : 400,
        DE : 400,
        GB : 400,
        BE :400,
        DK : 400,
        ES : 400,
        FR : 400,
        NL : 400
      },
      items: [
        {
          id: 1,
          name: 'Amérique du Nord :',
          children: [
            { id: 1, name: 'Canada' },
            { id: 2, name: 'Etats-Unis' },
          ],
        },
        {
          id: 3,
          name: 'Afrique :',
          children: [
            { id: 1, name: 'Afrique du Sud' },
            { id: 2, name: 'Maroc' },
            { id: 3, name: 'Nigeria' },
          ],
        },
        {
          id: 4,
          name: 'Europe :',
          children: [
            { id: 1, name: 'Allemagne' },
            { id: 2, name: 'Angleterre' },
            { id: 3, name: 'Belgique' },
            { id: 3, name: 'Danemark' },
            { id: 3, name: 'Espagne' },
            { id: 3, name: 'France' },
            { id: 3, name: 'Pays-Bas' },
          ],
        },
      ],
    }),
  }
</script>

<style>
.image {
  transform: rotate(180deg);
}
</style>
