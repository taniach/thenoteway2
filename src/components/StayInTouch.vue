<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12 display-1 font-weight-black my-5 text-xs-center>
                <img src="@/assets/email.png" id="stay-in-touch-icon" />
                Stay In Touch
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 text-xs-center title>
                Sign up for our newsletter for the latest course updates and offers
            </v-flex>
        </v-layout>
        <mailchimp-subscribe 
            action="https://example.us15.list-manage.com/subscribe/post-json?u=xxx&amp;id=xxx&amp;c=?">
        </mailchimp-subscribe>
        <v-layout row>
            <v-flex xs12 text-xs-center font-weight-light mb-4>
                You can unsubscribe at any time
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import MailchimpSubscribe from '@/components/MailchimpSubscribe';

export default {
    name: 'StayInTouch',
    components: {
        MailchimpSubscribe
    }
}
</script>

<style scoped>
.container {
    background-color: #ffe4b7;
}

#stay-in-touch-icon {
    max-height: 40px;
    margin-right: 5px;
}
</style>
