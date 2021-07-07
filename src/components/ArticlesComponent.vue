<template>
  <v-row class="mt-8 mb-6">
    <v-col cols="12">
      <h1 class="display-2 font-weight-bold mb-3">
        Derniers articles
      </h1>
    </v-col>
    <v-col cols="12" class="mb-8">
      <v-row>
        <v-col cols="3" v-for="item in items" :key="item.title">
          <v-card>

            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="mb-1">
                  {{item.title}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item-content class="d-flex justify-center">
              <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="150"
                  max-width="250"
                  :src="item.image"
              ></v-img>
            </v-list-item-content>

            <v-list-item-subtitle class="text-center">Vivre à Auckland : l’exemple de Léa</v-list-item-subtitle>
            <v-card-actions>
              <v-btn
                  outlined
                  rounded
                  text
              >
                Plus
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="mt-8">
      <v-row class="d-flex justify-center">
        <v-btn
            class="ma-1 rounded-xl"
            color="warning"
            dark
        >
          VOIR PLUS D'ARTICLES
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'ArticlesComponents',

    data: () => ({
      items: [
        { title : 'QUE FAIRE À MARRAKECH EN DÉCEMBRE', image : 'article1.jpeg'},
        { title : 'LES MEILLEURE ADRESSES PARISIENNE', image : 'article2.jpeg'},
        { title : '10 RESTAURANTS À DÉCOUVRIR À MADRID', image : 'article3.jpeg'},
        { title : 'LES MEILLEURE ADRESSES PARISIENNE-', image : 'article1.jpeg'}
      ]
    }),
  }
</script>
