<template>
  <v-app-bar
      app
      color="'transparent"
  >
    <v-spacer></v-spacer>
    <v-btn-toggle
        v-model="text"
        tile
        group
    >
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn value="left"
                 v-bind="attrs"
                 v-on="on">
            Afrique
            <v-icon
                dark
                right
            >
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in items[1].children"
              :key="index"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn value="left"
                 v-bind="attrs"
                 v-on="on">
            AMÉRIQUE
            <v-icon
                dark
                right
            >
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in items[0].children"
              :key="index"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn value="left"
                 v-bind="attrs"
                 v-on="on">
            EUROPE
            <v-icon
                dark
                right
            >
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in items[2].children"
              :key="index"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn value="right">
        MES VIDÉOS
      </v-btn>
    </v-btn-toggle>
    <v-spacer></v-spacer>


    <v-btn icon :href="network[2].link"  target="_blank">
      <v-img
          :src="network[2].icon"
          class="my-3"
          contain
          height="25"
      />
    </v-btn>
    <v-btn icon :href="network[1].link" target="_blank">
      <v-img
          :src="network[1].icon"
          class="my-3"
          contain
          height="25"
      />
    </v-btn>
    <v-btn icon :href="network[0].link" target="_blank">
      <v-img
          :src="network[0].icon"
          class="my-3"
          contain
          height="25"
      />
    </v-btn>
    <v-btn icon :href="network[3].link" target="_blank">
      <v-img
          :src="network[3].icon"
          class="my-3"
          contain
          height="25"
      />
    </v-btn>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Menu',

    data: () => ({
      text : null,
      icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      afrique : [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      amerique : [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
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
      network : [
        {
          subscribers : '1,8K',
          icon : 'instagram.svg',
          link : "https://www.instagram.com/divineknd/"
        },
        {
          subscribers : '208',
          icon : 'youtube.svg',
          link : "https://www.youtube.com/channel/UCWL4zsChu-u0GT5OrVdGhvQ"
        },
        {
          subscribers : '300',
          icon : 'facebook.svg ',
          link : "https://www.facebook.com/Divibes-114250666931268"
        },
        {
          subscribers : '2,3k',
          icon : 'tik-tok.svg ',
          link : " https://www.tiktok.com/@divibes22?lang=fr"
        },
      ],
      drawer: false,
      group: null,
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
