<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 text-xs-center display-1 font-weight-black my-5>
                Choose Group Size
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
            { value: 'individual', image: 'user.png', title: 'Individual (1-5 Pax)' },
            { value: 'group', image: 'users-group.png', title: 'Group (6-50 Pax)' },
            { value: 'big-group', image: 'crowd-of-users.png', title: 'Big Group (> 50 Pax)' }
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
</style>
