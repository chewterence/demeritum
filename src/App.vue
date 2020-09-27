<template>
  <v-app>
    <v-main>
      <Header/>

    <div id="nav">
      <ul id="nav-list">
      <router-link to="/essay" id="nav-element">
      <v-icon large class="mr-2">mdi-book-open-variant</v-icon>
          Exagium
      </router-link>
      <router-link to="/game" id="nav-element">
      <v-icon large class="mr-2">mdi-gamepad-variant</v-icon>
          Ludo
      </router-link>
      <router-link to="/about" id="nav-element">
      <v-icon large class="mr-2">mdi-account-question</v-icon>
          Fere
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
  font-family: 'Arimo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #daffd3;
  text-decoration: none;
  position: relative;
}

#nav-list {
  list-style: none;
  /* display: inline-flex; */
}

#nav {
  padding: 10px;
  text-decoration: none;
  text-align: left;
  font-size:28px;
  font-family: 'Arimo', sans-serif;
  /* margin-left: 1px; */
}

#nav-element:hover {
  color: #ffffff;
  font-size:30px;
}

#nav a {
  font-weight: bold;
  color: #878787;
  text-decoration: none;
  margin-left: 6px;
}

#nav a.router-link-exact-active {
  color: #ff0000;
  text-decoration: none;
}
</style>>
