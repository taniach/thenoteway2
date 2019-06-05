<template>
    <v-container fluid grid-list-lg>
        <v-layout row>
            <v-flex xs12 text-xs-center display-1 font-weight-black my-5>
                <img src="@/assets/gallery.png" id="gallery-icon" />
                Gallery
            </v-flex>
        </v-layout>
        <v-layout>
            <instagram-feed></instagram-feed>
        </v-layout>
        <div class="text-xs-center">
            <v-btn large id="see-more" dark>SEE MORE</v-btn>
        </div>
    </v-container>
</template>

<script>
import InstagramFeed from '@/components/InstagramFeed';

export default {
    name: 'Gallery',
    components: {
        InstagramFeed
    }
};
</script>

<style scoped>
.display-1 {
    color: #f96900;
}

#see-more {
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #f96900;
}

#gallery-icon {
    max-height: 40px;
}

.mb-0 {
    padding-bottom: 10px;
}

.container {
    background-color: #e9e9e9;
}
</style>
