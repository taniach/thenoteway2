<template>
    <v-container fluid text-xs-center>
        <vue-instagram token="9978073464.1677ed0.e084c4ca5e25406d8e19cf4d43590335" :count="20">
            <div slot="feeds" slot-scope="props" class="customrow">
                <img :src="props.feed.images.standard_resolution.url" height="300" width="300"/>
            </div>
        </vue-instagram> 
    </v-container>
</template>

<script>
import VueInstagram from 'vue-instagram';

export default {
  name: 'InstagramFeed',

  components: {
    VueInstagram
  }
}
</script>

<style scoped>
div.customrow {
    display: inline-block;
}
</style>