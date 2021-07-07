<template>
  <v-row class="pa-0" style="background-color: #f3f4f5">
    <v-col cols="5" class="pa-0">
      <v-img
          class="mt-3 ml-10 rounded-xl"
          max-height="700"
          max-width="700"
          src="idcomponent.jpeg"
      ></v-img>
    </v-col>
    <v-col cols="7" class="mt-8 d-flex align-center">
      <v-row>
        <v-col cols="12">
          <h1 class="display-2 font-weight-bold mb-10 black--text">
            Hello ! <br>
            Moi c’est Divibes
          </h1>
        </v-col>
        <v-col cols="12">
          <p class="subheading font-weight-regular mb-8 black--text">
            Passionnée de voyage depuis mon plus jeune âge, <br>
            j’ai habité dans de nombreuses villes partout dans le monde et ne cesse de bouger !
          </p>
        </v-col>
        <v-col cols="12">
          <div class="mt-4">
            <v-btn
                class="mt-10"
                color="warning rounded-xl"
                dark
            >
              CONNAÎTRE MON HISTOIRE
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'HelloWorld',

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
