/* eslint-disable */
<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Русиньскый - Rusyn Learning Website</v-toolbar-title>
      <v-spacer />
      <span>Made by Мiхал К</span>
    </v-app-bar>
    <v-navigation-drawer absolute v-model="drawer" app clipped>
      <v-list nav rounded dense>
        <v-list-item>
          <v-list-item-title>The Basics</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Grammar</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Subjects</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Dictionary</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>More coming soon!</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Where the fun starts.... -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
};
// eslint-disable-next-line
</script>