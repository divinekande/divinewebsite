<template>
  <v-col
      class="pa-0"
      cols="12"
      style="background-color: #f3f4f5"
  >
    <v-img src="netWave.svg" height="250">
      <v-row  class="d-flex justify-center">
        <v-col cols="8" class="d-flex align-end">
          <v-row class="pa-0">
            <v-col
                cols="3"
                v-for="(item, i) in items"
                :key="i"
            >
              <div class="text-center pa-0">
                <h6 class="display-2 font-weight-bold mb-3">
                  {{item.subscribers}}
                </h6>
                <a
                    :href="item.link"
                    target="_blank"
                >
                  <v-img
                      :src="item.icon"
                      class="my-3"
                      contain
                      height="50"
                  />
                </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
  </v-col>
</template>

<script>
  export default {
    name: 'NetworkComponent',
    data: () => ({
      items: [
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
    }),
  }
</script>
