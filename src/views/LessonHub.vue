<template>
  <div>
    <v-layout>
      <v-spacer />
      <v-btn v-if="!(showForm)" @click="showForm = !showForm" rounded class="mr-12 mt-6 grey py-4">Request Lesson<v-icon class="pl-2">mdi-plus-circle</v-icon></v-btn>
      <v-btn v-if="showForm" @click="showForm = !showForm" rounded class="mr-12 mt-6 grey py-4">Close<v-icon class="pl-2">mdi-location-exit</v-icon></v-btn>
    </v-layout>
    <!-- <v-container v-if="showForm && checkCookie('user')"> -->
    <v-container v-if="showForm">
      <h2>New Lesson</h2>
      <v-form ref="newlesson" v-model="newlesson">
        <v-text-field v-model="title" label="Title*" />
        <v-text-field v-model="description" label="Description*" />
        <v-btn @click="submitLesson()">Request Lesson</v-btn>
      </v-form>
    </v-container>
    <h4 class="ml-9 mb-2 text-h5">Sort By:</h4>
    <v-select v-on:change="handleSort" v-model="sorting" label="Difficulty" class="ml-9" style="width: 15%;" outlined :items="orderNames" />
    <v-flex>
      <v-layout>
        <v-flex md3 class="pa-6" v-for="lesson in lessons" :key="lesson.id">
           <v-card :href="lesson.link" :width=cardWidth class="card-container">
            <v-list-item three-line>
              <v-list-item-content>
                <!-- <v-layout>
                  <div class="text-overline mb-0">
                    <span class="pr-16 mr-16">{{lesson.level}}</span>
                    <span class="pl-14">{{lesson.time}}</span>
                  </div>
                </v-layout> -->
                <div class="text-overline mb-2 mt-1">
                  <v-row>
                    <span class="pl-3">{{lesson.level}}</span>
                    <v-spacer />
                    <span class="pr-3">{{lesson.time}} minute read</span>
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
              <v-btn v-if="lesson.yturl != null" :href="lesson.yturl" rounded depressed>
                <v-avatar>
                  <!-- <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YT Logo"> -->
                  <v-icon>mdi-youtube</v-icon>
                </v-avatar>
              </v-btn>
              <v-spacer />
              <v-btn class="pl-3" v-if="lesson.link != null" :href="lesson.link" rounded depressed>
                Learn
                <v-icon class="pl-2">mdi-bank</v-icon>
              </v-btn>
              <!-- <v-btn v-if="lesson.user != null" :href="lesson.user" rounded depressed>
                <v-avatar>
                  <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
              </v-btn> -->
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
      orderNames: ["Difficulty", "Time"],
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
    handleSort: function(selection) {
      switch(selection) {
        case "Difficulty":
          this.difficultySort();
          break;
        case "Time":
          this.timeSort();
          break;
      };
    },
    difficultySort: function() {
      var lessonList;
      for (level in this.levels) {
        for (lesson in this.lessons) {
          if (lesson.level.includes(level)) {
            lessonList.push(lesson);
          };
        };
      };
      this.lessons = lessonList;
    },
    timeSort: function() {
      var sorted = false;
      var lessonList;
      while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.lessons.length; i++) {
          if (this.lessons[i].time > this.lessons[i+1].time) {
            var temp = this.lessons[i];
            this.lessons[i] = this.lessons[i+1];
            this.lessons[i+1] = temp;
          };
        };
      };
    },
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
  computed: {
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 220
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
      }
    },
  },
  mounted() {
    fetch("http://localhost:3000/lessons")
      .then(res => res.json())
      .then(data => this.lessons = data)
      .then(console.log(JSON.stringify(this.lessons)))
      .catch(err => console.log(err.message))
  }
  // firebase: {
  //   lessons: db.ref('0'),
  // },
};
</script>