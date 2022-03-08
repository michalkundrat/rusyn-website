/* eslint-disable */
<template>
  <v-app>
    <v-app-bar class="grey lighten-2" flat app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Learn</span>
        <v-divider />
        <span>Rusyn</span>
      </v-toolbar-title>
      <!-- <v-toolbar-title>Русиньскый - Rusyn Learning Website</v-toolbar-title> -->
      <v-spacer />
      <v-btn text class="mr-2" v-for="topitem in topitems" :key="topitem.title" rounded :to="topitem.route">{{topitem.title}}</v-btn>
      <v-spacer />
      <span>Made by Мiхал К</span>
    </v-app-bar>
    <v-navigation-drawer absolute v-model="drawer" app clipped>
      <v-list dense nav rounded>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
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
    items: [
      {title: "Basics", route: "/basics"},
      {title: "Grammar", route: "/grammar"},
      {title: "Subjects", route: "/subjects"},
      {title: "Dictionary", route: "/dictionary"},
      {title: "More coming soon!"},
    ],
    topitems: [
      {title: "Home", route: "/"},
      {title: "About", route: "/about"},
      {title: "Contact", route: "/contact"},
      {title: "Credits", route: "/credits"}
    ]
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
};
// eslint-disable-next-line
</script>