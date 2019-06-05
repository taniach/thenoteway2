<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
                <img src="@/assets/chat-speech-bubbles.png" id="blog-icon" />
                Blog
            </v-flex>
        </v-layout>
        <v-layout row wrap class="row-cards" id="row-of-three">
            <v-flex xs12 sm12 md4 v-for="blog in blogs" :key="blog.id">
                <v-card>
                    <v-img :src="require('@/assets/'+blog.image)" height="200px">
                    </v-img>
                </v-card>
                <div class="text-lg-left">
                    <div class="category">{{blog.category}}</div>
                    <div class="title">{{blog.title}}</div>
                </div>
            </v-flex>
        </v-layout>
        <div class="text-xs-center">
            <v-btn large id="see-all" dark>See all ({{total}})</v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'BlogPreview',
    data() {
        return {
            total: "23",
            blogs: [
                {
                    id: 1,
                    title: "How to make a photo collage",
                    category: "CRAFT",
                    image: "blog-image1.png"
                },
                {
                    id: 2,
                    title: "Leaf painting techniques",
                    category: "ART",
                    image: "blog-image2.png"
                },
                {
                    id: 3,
                    title: "15 colour combinations for greeting cards",
                    category: "DESIGN INSPIRATION",
                    image: "blog-image3.png"
                }
            ]
        };
    }
};
</script>

<style scoped>
.display-1 {
    color: #3bceac;
}

.category {
    color: #707070;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 10px;
}

.title {
    margin-bottom: 20px;
    font-weight: 900;
}

#see-all {
    background-color: #3bceac;
    margin-bottom: 20px;
    margin-top: 0;
}

#blog-icon {
    max-height: 40px;
}

.row-cards {
    padding-bottom: 30px;
}

@media screen and (min-width: 800px) {
    #row-of-three {
        margin-left: 80px;
        margin-right: 80px;
    }
}
</style>
