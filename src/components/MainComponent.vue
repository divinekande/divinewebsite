<template>
  <v-row class="d-flex justify-center" style="background-color: #FAFAFC">
    <v-col
        cols="12"
        class="pa-0"
    >
      <WelcomeComponent/>


    </v-col>
    <v-col
        cols="12"
        class="pa-0"
    >
      <IdComponent/>
    </v-col>
    <TravelComponent/>
    <PositionComponent/>
    <v-col
        cols="8"
        class="pa-0"
    >
      <ArticlesComponent/>
    </v-col>
    <VideosComponent/>
    <MeetingsComponent/>
    <NewsLetterComponent/>
    <NetworkComponent/>
    <InstagramComponent/>
  </v-row>
</template>

<script>
  import WelcomeComponent from './WelcomeComponent'
  import IdComponent from "@/components/IdComponent"
  import TravelComponent from "@/components/TravelComponent";
  import ArticlesComponent from "@/components/ArticlesComponent";
  import VideosComponent from "@/components/VideosComponent";
  import MeetingsComponent from "@/components/MeetingsComponent";
  import NetworkComponent from  "@/components/NetworkComponent";
  import NewsLetterComponent from "@/components/NewsLetterComponent";
  import InstagramComponent from "@/components/InstagramComponent";
  import PositionComponent from "@/components/PositionComponent";

  export default {
    name: 'HelloWorld',
    components : {
      IdComponent,
      TravelComponent,
      VideosComponent,
      WelcomeComponent,
      NetworkComponent,
      PositionComponent,
      MeetingsComponent,
      ArticlesComponent,
      InstagramComponent,
      NewsLetterComponent
    },
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
