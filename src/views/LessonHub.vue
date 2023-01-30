<template>
  <div>
    <v-layout>
      <v-spacer />
      <v-btn disabled v-if="!(showForm)" @click="showForm = !showForm" rounded class="mr-12 mt-6 grey py-4">Request Lesson<v-icon class="pl-2">mdi-plus-circle</v-icon></v-btn>
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
    <v-select v-on:change="swapSorting" v-model="this.sortBy" dense class="ml-9" style="width: 15%;" outlined :items="orderNames" />
    <v-flex>
      <v-layout>
        <v-flex md3 class="pa-6" v-for="lesson in handleSort" :key="lesson.id">
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
      sortBy: "Difficulty",
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
      difficultyLessons: [
        {
          "id": 1,
          "title": "Cyrillic Alphabet",
          "description": "Learn to read and write in the Rusyn variant of the Cyrillic alphabet",
          "time": 15,
          "level": "Beginner",
          "link": "http://learnrusyn.xyz/#/lessons/cyrillic"
        },
        {
          "id": 2,
          "title": "Personal Pronouns",
          "description": "Learn what a pronoun is and what the Rusyn personal pronouns are",
          "time": 5,
          "level": "Beginner/Intermediate",
          "link": "http://learnrusyn.xyz/#/lessons/personal-pronouns"
        }
      ],
      timeLessons: [
        {
          "id": 2,
          "title": "Personal Pronouns",
          "description": "Learn what a pronoun is and what the Rusyn personal pronouns are",
          "time": 5,
          "level": "Beginner/Intermediate",
          "link": "http://learnrusyn.xyz/#/lessons/personal-pronouns"
        },
        {
          "id": 1,
          "title": "Cyrillic Alphabet",
          "description": "Learn to read and write in the Rusyn variant of the Cyrillic alphabet",
          "time": 15,
          "level": "Beginner",
          "link": "http://learnrusyn.xyz/#/lessons/cyrillic"
        }
      ],
      levels: [
        "Beginner",
        "Intermediate",
        "Advanced"
      ],
    }
  },
  methods: {
    swapSorting: function() {
      if (this.sortBy == "Difficulty") {
        this.sortBy = "Time";
      } else if (this.sortBy == "Difficulty") {
        this.sortBy = "Time";
      } else {
        this.sortBy = "Difficulty";
      }
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
      return lessonList;
    },
    timeSort: function() {
      let arr = this.lessons;
      for (var i = 0; i < arr.length; i++) {
    
        // Last i elements are already in place 
        for (var j = 0; j < (arr.length - i -1); j++) {
          
          // Checking if the item at present iteration
          // is greater than the next iteration
          if (arr[j] > arr[j+1]) {
            
            // If the condition is true then swap them
            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
          }
        }
      }
      return arr;

      // var sorted = false;
      // while (!sorted) {
      //   sorted = true;
      //   for (let i = 0; i < this.lessons.length; i++) {
      //     console.log(this.lessons[i].time);
      //     if (this.lessons[i].time > this.lessons[i+1].time) {
      //       var temp = this.lessons[i];
      //       this.lessons[i] = this.lessons[i+1];
      //       this.lessons[i+1] = temp;
      //     };
      //   };
      // };
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
    cardWidth: function() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 220
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
      }
    },
    handleSort: function() {
      switch (this.sortBy) {
        case "Time":
          return this.timeLessons;
        case "Difficulty":
          return this.difficultyLessons;
      }
    }


      // var result;
      // if (this.sortBy == undefined) {
      //   this.sortedLessons = this.lessons;
      // } else if (this.sortBy == "Difficulty") {
      //   result = this.difficultySort();
      // } else if (this.sortBy == "Time") {
      //   result = this.timeSort();
      // }
      // return result;

    //   switch (sortBy) {
    //   case "Difficulty":
    //     let resultDifficulty = this.difficultySort();
    //     break;
    //   case "Time":
    //     let resultTime = this.timeSort();
    //     break;
    //   }
    //   try {
    //     return resultDifficulty;
    //   } catch (error) {
    //     try {
    //       return resultTime;
    //     } catch (error) {
    //       return this.lessons
    //     }
    //   }
    // }

  // mounted() {
  //   fetch("http://localhost:3000/lessons")
  //     .then(res => res.json())
  //     .then(data => this.lessons = data)
  //     .then(console.log(JSON.stringify(this.lessons)))
  //     .catch(err => console.log(err.message))
  // }
  // firebase: {
  //   lessons: db.ref('0'),
  // },
  }
}
</script>