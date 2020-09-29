<template>
  <v-app>
    <v-main>
      <Header/>

    <div id="nav">
      <ul id="nav-list">
      <router-link to="/essay" id="nav-element">
      <v-icon large class="mr-2">mdi-book-open-variant</v-icon>
          <span class="display-1 v-heading mb-3 font-weight-normal">
          Exagium
          </span>
      </router-link>
      <router-link to="/game" id="nav-element">
      <v-icon large class="mr-2">mdi-gamepad-variant</v-icon>
        <span class="display-1 v-heading mb-3 font-weight-normal">
          Ludo
        </span>
      </router-link>
      <router-link to="/about" id="nav-element">
      <v-icon large class="mr-2">mdi-account-question</v-icon>
        <span class="display-1 v-heading mb-3 font-weight-normal">
          Fere
        </span>
      </router-link>
      </ul>
    </div>
      <hr>
    <router-view/>

    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  created () {
    this.$vuetify.theme.dark = true
  },

  data: () => ({
  }),
};
</script>

<style scoped>
#app {
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  position: relative;
}

#nav-list {
  list-style: none;
}

#nav {
  padding: 10px;
  text-decoration: none;
  text-align: left;
  font-size:30px;
  /* font-family: 'Arimo', sans-serif; */
}

#nav-element:hover {
  color: #ffffff;
  font-size:32px;
}

#nav a {
  font-weight: bold;
  color: #878787;
  text-decoration: none;
  margin-left: 6px;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  text-decoration: none;
}
</style>