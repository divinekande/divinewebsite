<template>
  <v-col
      class="pa-0"
      cols="12"
      style="background-color: #FAFAFC"
  >
    <v-row class="d-flex justify-center pa-16">
      <v-col cols="8">
        <v-row>
          <v-col cols="7">
            <v-row class="d-flex justify-center">
              <v-col cols="8">
                <v-card-text class="text-center text-h5 font-weight-black">
                  Reçois ta dose de voyage toutes les semaines
                  dans ta boite mail. Promis c’est certifié 0 spam !
                </v-card-text>
              </v-col>
              <v-col cols="6">
                <v-form>
                  <v-container>
                    <v-row class="d-flex justify-center">
                      <v-text-field
                          label="Votre email"
                          solo
                      ></v-text-field>
                      <v-btn
                          x-large
                          color="warning rounded-xl"
                          dark
                      >
                        S'inscrire
                      </v-btn>
                    </v-row>
                  </v-container>
                </v-form>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="5" class="d-flex justify-start">
            <div class="rounded-circle" style="background-color:#DB5461;width: 150px; height: 150px;">
              <v-img
                  src="email.svg"
                  class="mt-5"
                  contain
                  height="100"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-img src="newsWave.svg" height="200" />
  </v-col>
</template>

<script>
  export default {
    name: 'NewsLetterComponent',

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
