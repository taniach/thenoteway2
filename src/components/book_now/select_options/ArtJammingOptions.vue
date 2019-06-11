<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md4 v-for="option in options" :key="option.id">
      <v-card>
        <v-img
          :src="require('@/assets/book_now/'+option.image)"
          aspect-ratio="1"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ option.title }}</div>
            <span class="grey--text">{{ option.subtitle }}</span>
          </div>
        </v-card-title>
        <v-card-title primary-title>
            <div>
                <v-flex>
                    <v-select :items="items" label="Number of Pax" outline></v-select>
                </v-flex>
            </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        options: [
            {
                id: '1',
                image: 'tote-bag.png',
                title: 'Tote Bag',
                subtitle: 'A3 Size Canvas Tote Bag'
            },
            {
                id: '2',
                image: 't-shirt.png',
                title: 'T-Shirt',
                subtitle: '100% Cotton T-Shirts'
            },
            {
                id: '3',
                image: 'canvas.png',
                title: 'Canvas',
                subtitle: '40 X 40cm  Stretched Canvas'
            }
        ],
        items: [...Array(50).keys()].map(x => ++x)
      }
    }
  }
</script>

<style scoped>
.v-card {
    width: 300px;
    margin-bottom: 30px;
}
</style>
