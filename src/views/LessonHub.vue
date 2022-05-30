<template>
  <div>
    <h1 class="text-center">Enjoy our lessons!</h1>

    <v-flex>
      <v-layout>
        <v-flex md4 class="pa-6" v-for="lesson in lessons" :key="lesson">
           <v-card :href="lesson.link" class="card-container">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  {{lesson.level}}
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  {{lesson.title}}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{lesson.description}}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn v-if="lesson.link != null" :href="lesson.yturl" rounded depressed>
                Learn
                <v-icon class="pl-2">mdi-bank</v-icon>
              </v-btn>
              <v-btn v-if="lesson.yturl != null" :href="lesson.yturl" rounded depressed>
                <v-avatar>
                  <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YT Logo">
                </v-avatar>
              </v-btn>
              <v-spacer />
              <v-btn v-if="lesson.user != null" :href="lesson.user" rounded depressed>
                <v-avatar>
                  <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "LessonHub",
  data () {
    return {
      lessons: [
        {
          title: "Cyrillic  Script",
          description: "Learn the basics of the Cyrillic script",
          time: "10 minutes",
          level: "Beginner",
          user: "John",
          link: "http://rusynlearning.com/learncyrillic",
          yturl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        }
      ]
    }
  }
};
</script>