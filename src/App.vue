<template>
  <v-app>
    <v-main>
      <Menu/>
      <MainComponent/>
      <FooterComponent/>
    </v-main>
  </v-app>
</template>

<script>

import Menu from './components/Menu';
import MainComponent from './components/MainComponent';
import FooterComponent from "@/components/Footer";

export default {
  name: 'App',

  components: {
    Menu,
    MainComponent,
    FooterComponent
  },

  data: () => ({
    //
  }),
};
</script>
