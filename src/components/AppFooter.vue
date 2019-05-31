<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="footer-up">
        <strong class="subheading">Get connected with us on social networks</strong>

        <v-spacer></v-spacer>
        <span id="icons">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <v-icon size="24px" :class="social">{{ icon }}</v-icon>
          </v-btn>
        </span>
      </v-card-title>

      <v-card-actions class="footer-down justify-center">
        &copy; 2019 All rights reserved — The Noteway Art Studio LLP
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-instagram',
        'fab fa-youtube'
      ],
      social: "social-icon"
    })
  }
</script>

<style scoped>
.social-icon:hover {
  color: #F96900;
}

.footer-up {
  background-color: #241F21;
}

.footer-down {
  background-color: black;
  color: #7F7878;
}

.subheading, #icons{
  margin-left: 50px;
  margin-right: 50px;
}
</style>