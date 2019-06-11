<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 text-xs-center display-1 font-weight-black my-5>
                Select Options &amp; Quantity
            </v-flex>
        </v-layout>
        <v-layout row>
            <art-jamming-options></art-jamming-options>
        </v-layout>
    </v-container>
</template>

<script>
import ArtJammingOptions from '@/components/book_now/select_options/ArtJammingOptions';

export default {
    name: 'GroupSize',
    components: {
        ArtJammingOptions
    },
    data () {
      return {
      }
    }
};
</script>

<style scoped>
</style>
