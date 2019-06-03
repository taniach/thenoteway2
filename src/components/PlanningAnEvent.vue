<template>
    <v-container fluid grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
                <img src="@/assets/multiple-users-silhouette.png" id="users" />
                Planning An Event
            </v-flex>
        </v-layout>
        <v-layout row wrap class="row-cards" id="row-of-three">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img :src="require('@/assets/corporate.jpg')" height="300px">
                    </v-img>
                </v-card>
                <div class="text-xs-center">
                    <v-btn large class="see-more" dark>CORPORATE EVENTS</v-btn>
                </div>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img :src="require('@/assets/parties.jpg')" height="300px">
                    </v-img>
                </v-card>
                <div class="text-xs-center">
                    <v-btn large class="see-more" dark>PARTIES</v-btn>
                </div>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img :src="require('@/assets/entrance.jpg')" height="300px">
                    </v-img>
                </v-card>
                <div class="text-xs-center">
                    <v-btn large class="see-more" dark>JUST THE VENUE</v-btn>
                </div>
            </v-flex>
        </v-layout>
        
        
    </v-container>
</template>

<script>
export default {
    name: 'PlanningAnEvent'
};
</script>

<style scoped>
.display-1 {
    color: black;
}

.see-more {
    margin-top: 30px;
    margin-bottom: 30px;
}

#users {
    max-height: 40px;
}

.mb-0 {
    padding-bottom: 10px;
}

.row-cards {
    padding-bottom: 30px;
}

.container {
    background-color: #e9e9e9;
}

@media screen and (min-width: 800px) {
    #row-of-three {
        margin-left: 80px;
        margin-right: 80px;
    }
}
</style>
