<template>
    <v-container grid-list-lg class="peoplesay">
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
                <img src="@/assets/quote.png" id="talk" />
                What People Say
            </v-flex>
        </v-layout>
        <v-carousel hide-delimiters>
            <v-carousel-item>
                <v-layout row>
                    <v-flex xs4>
                        <testimonial
                            name="Soh Xiao Fen"
                            description="Art Enthusiast"
                        >
                            Accessible location, friendly staff and a cosy environment to work on your artwork! Highly recommend for all ages!
                        </testimonial>
                    </v-flex>
                    <v-flex xs4>
                        <testimonial
                            name="Sarah Lai"
                            description="Shopee"
                        >
                            Had a great experience to organise the art jam battle, as part of my company’s teambuilding event. All of us enjoyed ourselves and had fun!
                        </testimonial>
                    </v-flex>
                    <v-flex xs4>
                        <testimonial
                            name="Jasmine Tan"
                            description="Mother of 2"
                        >
                            Really a great and therapeutic experience at the noteway art studio! Amazing environment where you can just be in your own world and enjoy drawing. Highly recommended!!:)
                        </testimonial>
                    </v-flex>
                </v-layout>
            </v-carousel-item>
            <v-carousel-item>
                <v-layout row>
                    <v-flex xs4>
                        <testimonial
                            name="Mandy Kim"
                            description="Novice Artist"
                        >
                            Really a great and therapeutic experience at the noteway art studio! Amazing environment where you can just be in your own world and enjoy drawing. Highly recommended!!:)
                        </testimonial>
                    </v-flex>
                    <v-flex xs4>
                        <testimonial
                            name="Andy Loh"
                            description="OCBC Bank"
                        >
                            Had a great experience to organise the art jam battle, as part of my company’s teambuilding event. All of us enjoyed ourselves and had fun!
                        </testimonial>
                    </v-flex>
                    <v-flex xs4>
                        <testimonial
                            name="Xiao Fen Soh"
                            description="Art Enthusiast"
                        >
                            I had an awesome afternoon spent at The Noteway Art Studio! Accessible location, friendly staff and a cosy environment to work on your artwork! Highly recommend for all ages!
                        </testimonial>
                    </v-flex>
                </v-layout>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
import Testimonial from '@/components/Testimonial';

export default {
  name: 'WhatPeopleSay',
  components: {
      Testimonial
  }
};
</script>

<style scoped>
.display-1 {
    color: #3bceac;
}

#talk {
    max-height: 40px;
}

.peoplesay {
    margin-bottom: 50px;
}
</style>
