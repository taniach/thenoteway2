<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 text-xs-center display-1 font-weight-black my-5>
                Choose Activity
            </v-flex>
        </v-layout>
        <v-radio-group v-model="radios" :mandatory="false" row>
            <v-radio v-for="option in options" :key="option.value" :value="option.value">
                <template slot="label">
                    <v-card hover>
                        <v-img :src="require('@/assets/book_now/'+option.image)"></v-img>
                        <v-card-title primary-title>
                            <div>
                                <h4>{{option.title}}</h4>
                            </div>
                        </v-card-title>
                    </v-card>
                </template>
            </v-radio>
        </v-radio-group>
    </v-container>
</template>

<script>
export default {
    name: 'GroupSize',
    data () {
      return {
        radios: null,
        options: [
            { 
                value: 'art-jamming-with-a-twist', 
                image: 'art-jam.png', 
                title: 'Art Jamming With A Twist', 
                showForRadio: ['individual','group','big-group'] 
            },
            { 
                value: 'art-jam-battle', 
                image: 'art-jam-battle.png', 
                title: 'Art Jam Battle', 
                showForRadio: ['group','big-group'] 
            },
            { 
                value: 'ultimate-art-jam-battle', 
                image: 'ultimate-art-jam-battle.png', 
                title: 'Ultimate Art Jam Battle', 
                showForRadio: ['group','big-group'] 
            },
            { 
                value: 'sand-art', 
                image: 'sand-art.png', 
                title: 'Sand Art Workshop', 
                showForRadio: ['individual','group','big-group'] 
            },
            { 
                value: 'paper-quilling', 
                image: 'paper-quilling.png', 
                title: 'Paper Quilling Workshop', 
                showForRadio: ['individual','group','big-group'] 
            },
            { 
                value: 'terrarium', 
                image: 'terrarium.png', 
                title: 'Terrarium Workshop', 
                showForRadio: ['individual','group','big-group'] 
            },
            { 
                value: 'clay', 
                image: 'clay.png', 
                title: 'Clay Workshop', 
                showForRadio: ['individual','group','big-group'] 
            },
            { 
                value: 'brush-lettering', 
                image: 'brush-lettering.png', 
                title: 'Brush Lettering Workshop', 
                showForRadio: ['individual','group','big-group'] 
            }
        ]
      }
    }
};
</script>

<style scoped>
.v-card {
    width: 250px;
    margin-bottom: 30px;
}

div.v-image__image--cover {
    height: 150px;
    width: 150px;
}
</style>
