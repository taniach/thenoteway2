<template>
    <v-container grid-list-lg class="peoplesay">
        <v-layout row>
            <v-flex xs12 text-xs-center display-1 font-weight-black my-5>
                <img src="@/assets/quote.png" id="talk" />
                What People Say
            </v-flex>
        </v-layout>
        <v-carousel hide-delimiters class="hidden-sm-and-down">
            <v-carousel-item>
                <v-layout row>
                    <v-flex xs4>
                        <testimonial :name="review1.name" :description="review1.description">
                            {{review1.review}}
                        </testimonial>
                    </v-flex>
                    <v-flex xs4>
                        <testimonial :name="review2.name" :description="review2.description">
                            {{review2.review}}
                        </testimonial>
                    </v-flex>
                    <v-flex xs4>
                        <testimonial :name="review3.name" :description="review3.description">
                            {{review3.review}}
                        </testimonial>
                    </v-flex>
                </v-layout>
            </v-carousel-item>
            <v-carousel-item>
                <v-layout row>
                    <v-flex xs4>
                        <testimonial :name="review4.name" :description="review4.description">
                            {{review4.review}}
                        </testimonial>
                    </v-flex>
                    <v-flex xs4>
                        <testimonial :name="review5.name" :description="review5.description">
                            {{review5.review}}
                        </testimonial>
                    </v-flex>
                    <v-flex xs4>
                        <testimonial :name="review6.name" :description="review6.description">
                            {{review6.review}}
                        </testimonial>
                    </v-flex>
                </v-layout>
            </v-carousel-item>
        </v-carousel>
        <v-carousel hide-delimiters class="hidden-md-and-up">
            <v-carousel-item>
                <testimonial :name="review1.name" :description="review1.description">
                    {{review1.review}}
                </testimonial>
            </v-carousel-item>
            <v-carousel-item>
                <testimonial :name="review2.name" :description="review2.description">
                    {{review2.review}}
                </testimonial>
            </v-carousel-item>
            <v-carousel-item>
                <testimonial :name="review3.name" :description="review3.description">
                    {{review3.review}}
                </testimonial>
            </v-carousel-item>
            <v-carousel-item>
                <testimonial :name="review4.name" :description="review4.description">
                    {{review4.review}}
                </testimonial>
            </v-carousel-item>
            <v-carousel-item>
                <testimonial :name="review5.name" :description="review5.description">
                    {{review5.review}}
                </testimonial>
            </v-carousel-item>
            <v-carousel-item>
                <testimonial :name="review6.name" :description="review6.description">
                    {{review6.review}}
                </testimonial>
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
  },
  data: function() {
    return {
        review1: {
            name: "Soh Xiao Fen",
            description: "Art Enthusiast",
            review: "Accessible location, friendly staff and a cosy environment to work on your artwork! Highly recommend for all ages!"
        },
        review2: {
            name: "Sarah Lai",
            description: "Shopee",
            review: "Had a great experience to organise the art jam battle, as part of my company’s teambuilding event. All of us enjoyed ourselves and had fun!"
        },
        review3: {
            name: "Jasmine Tan",
            description: "Mother of 2",
            review: "Really a great and therapeutic experience at the noteway art studio! Amazing environment where you can just be in your own world and enjoy drawing. Highly recommended!!:)"
        },
        review4: {
            name: "Mandy Kim",
            description: "Novice Artist",
            review: "Really a great and therapeutic experience at the noteway art studio! Amazing environment where you can just be in your own world and enjoy drawing. Highly recommended!!:)"
        },
        review5: {
            name: "Andy Loh",
            description: "OCBC Bank",
            review: "Had a great experience to organise the art jam battle, as part of my company’s teambuilding event. All of us enjoyed ourselves and had fun!"
        },
        review6: {
            name: "Ang Tze Wei",
            description: "Art Enthusiast",
            review: "I had an awesome afternoon spent at The Noteway Art Studio! Accessible location, friendly staff and a cosy environment to work on your artwork! Highly recommend for all ages!"
        },
      }
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
