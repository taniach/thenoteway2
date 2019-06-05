<template>
    <v-form v-model="valid" @submit.prevent="subscribe">
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12 sm12 md6>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md6>
                    <v-btn large dark @click="subscribe">Subscribe</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'MailchimpSubscribe',
    props: {
      action: {}
    },
    data: () => ({
        valid: false,
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email must be valid'
      ],
      response: {}
    }),
    methods: {
      subscribe: function (event) {
        axios({
          method: 'get',
          url: this.action,
          data: JSON.stringify(this.email),
          cache: false,
          dataType: 'json',
          contentType: 'application/json; charset=utf-8'
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
.newsletter-section {
    display: inline-block;
}

@media screen and (min-width: 550px) {
    .container {
        width: 500px;
    }
}
</style>
