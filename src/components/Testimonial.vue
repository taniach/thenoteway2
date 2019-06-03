<template>
  <v-card
    class="mx-auto"
    light
    max-width="400"
  >
    <v-card-title>
      <img src="@/assets/quotes-grey.png" id="quotes" />
    </v-card-title>

    <v-card-text>
            <span class="font-weight-light"><slot></slot></span>
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
          

        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold">{{name}}</v-list-tile-title>
          <v-list-tile-sub-title>{{description}}</v-list-tile-sub-title>
        </v-list-tile-content>
        
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Testimonial',
    props: ['name', 'description'],
    data: () => ({
      //
    })
  }
</script>

<style scoped>
#quotes {
    max-height: 100px;
    margin: auto;
}

.v-card {
    border-bottom: 10px solid #3bceac;
    min-height: 500px;
}

.v-card__text {
    min-height: 200px;
}
</style>