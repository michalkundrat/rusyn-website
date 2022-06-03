<template>
  <div>
    <v-layout>
      <v-spacer />
      <v-btn v-if="!(showForm)" @click="showForm = !showForm" rounded class="mr-12 mt-6 grey py-4">Add Lesson<v-icon class="pl-2">mdi-plus-circle</v-icon></v-btn>
      <v-btn v-if="showForm" @click="showForm = !showForm" rounded class="mr-12 mt-6 grey py-4">Close<v-icon class="pl-2">mdi-location-exit</v-icon></v-btn>
    </v-layout>
    <!-- <v-container v-if="showForm && checkCookie('user')"> -->
    <v-container v-if="showForm">
      <h2>New Lesson</h2>
      <v-form ref="newlesson" v-model="newlesson">
        <v-text-field v-model="title" label="Title*" />
        <v-text-field v-model="description" label="Description*" />
        <v-text-field v-model="content" label="Content" />
        <v-text-field v-model="ytlink" label="YouTube Link" />
        <v-text-field v-model="time" label="Estimated Time" />
        <v-select v-model="level" :items="levels" />
        <v-btn @click="submitLesson()">Submit Lesson</v-btn>
      </v-form>
    </v-container>
    <v-flex>
      <v-layout>
        <v-flex md4 class="pa-6" v-for="lesson in lessons" :key="lesson">
           <v-card :href="lesson.link" class="card-container">
            <v-list-item three-line>
              <v-list-item-content>
                <!-- <v-layout>
                  <div class="text-overline mb-0">
                    <span class="pr-16 mr-16">{{lesson.level}}</span>
                    <span class="pl-14">{{lesson.time}}</span>
                  </div>
                </v-layout> -->
                <div class="text-overline mb-2">
                  <v-row>
                    <span class="pl-3">{{lesson.level}}</span>
                    <v-spacer />
                    <span class="pr-3">{{lesson.time}}</span>
                  </v-row>
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
                  <!-- <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YT Logo"> -->
                  <v-icon>mdi-youtube</v-icon>
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
      showForm: false,
      // lessons: [
      //   {
      //     title: "Cyrillic  Script",
      //     description: "Learn the basics of the Cyrillic script",
      //     time: "10 minutes",
      //     level: "Beginner",
      //     user: "John",
      //     link: "http://rusynlearning.com/learncyrillic",
      //     yturl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //   }
      // ],
      lessons: [],
      levels: [
        "Beginner",
        "Intermediate",
        "Advanced"
      ],
    }
  },
  methods: {
    submitLesson: function() {
      // this.lessons.push(
      //   {
      //     title: this.title,
      //     description: this.description,
      //     time: this.time,
      //     level: this.level,
      //     user: "John",
      //     link: "https://www.youtube.com/",
      //     yturl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      //   }
      // )
      var data = {
        title: this.title,
        description: this.description,
        time: this.time,
        level: this.level,
        user: "John",
        link: "https://www.google.com/",
        yturl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
      // console.log(JSON.stringify(data))
      // var xhr = new XMLHttpRequest();
      // xhr.open("POST", "http://localhost:3000/lessons");
      // xhr.setRequestHeader('Content-Type', 'application/json');
      // xhr.send(JSON.stringify(data));
      fetch("http://localhost:3000/lessonRequests", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => console.log(res));
    },
  },
  mounted() {
    fetch("http://localhost:3000/lessons")
      .then(res => res.json())
      .then(data => this.lessons = data)
      .catch(err => console.log(err.message))
  }
  // firebase: {
  //   lessons: db.ref('0'),
  // },
};
</script>