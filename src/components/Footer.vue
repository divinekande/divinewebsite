<template>
  <v-footer
      dark
      padless
  >
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-row>
          <v-col
              v-for="card in cards"
              :key="card.title"
              cols="3"
          >
            <div>
              <v-list-item v-if="card.title === 'CATÉGORIES'">
                <v-list-item-content>
                  <v-list-item-title class="mt-1 mb-2"><h3>{{card.title}}</h3></v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">L’équipe</v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">Pub / RP</v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">Tout sur mes chiffres</v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">Contactez-moi</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="card.title === 'LE BLOG'">
                <v-list-item-content>
                  <v-list-item-title class="mt-1 mb-2"><h3>{{card.title}}</h3></v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">Nouveau ? Clique ici</v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">Préparatifs</v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">Conseils photo</v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">Vidéos</v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">Vos récits</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="card.title === 'SUIVEZ MES AVENTURES'">
                <v-list-item-content>
                  <v-list-item-title  class="mt-1 mb-2"><h3>{{card.title}}</h3></v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">
                    <v-icon v-for="icon in icons"
                            :key="icon">
                      {{ icon }}
                    </v-icon>
                  </v-list-item-title>
                  <v-list-item-title class="mt-1 mb-1">
                    Mentions Légales
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      cards : [
        {
          title : 'Icon'
        },
        {
          title : 'CATÉGORIES'
        },
        {
          title : 'LE BLOG'
        },
        {
          title : 'SUIVEZ MES AVENTURES'
        }
      ],
      icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-instagram',
      ],

    }),
  }
</script>
