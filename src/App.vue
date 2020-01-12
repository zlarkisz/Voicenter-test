<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense rounded>
        <v-list-item link v-for="(item, i) in navigation" :key="i" :to="item.link" color="primary">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/">Voicenter</router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    navigation: [
      { icon: "mdi-home", title: "Home", link: "/home" },
      { icon: "mdi-login", title: "Login", link: "/login" },
      { icon: "mdi-account", title: "User", link: "/user" },
      { icon: "mdi-post", title: "Post", link: "/posts" },
    ]
  })
};
</script>

<style scoped>
.v-application a {
  color: #fff;
  text-decoration: none;
}
</style>