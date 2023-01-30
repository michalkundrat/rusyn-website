<template>
  <div>
    <h1 class="text-center text-h4 pt-4">Personal Pronouns</h1>
    <h2 class="text-h5 px-9 pb-6"><b>On this page:</b></h2>
    <v-row>
      <v-btn @click="$vuetify.goTo('#what-are-personal-pronouns')" rounded class="grey lighten-2 ml-9 mb-3">What are pronouns?</v-btn>
      <v-btn @click="$vuetify.goTo('#personal-pronouns')" rounded class="grey lighten-2 ml-2 mb-3">Personal Pronouns</v-btn>
    </v-row>
    <h4 id="what-are-personal-pronouns" class="text-subtitle-1 mt-1 pt-3 px-9">A pronoun is word that can function as a noun phrase used by itself and that refers either to the participants in the discourse (e.g. I, you) or to someone or something mentioned elsewhere in the discourse (e.g. she, it, this).</h4>
    <h6 class="text-h6 pt-1 px-9">Simplified: A word that substitutes a person</h6>
    <p class="px-9">
      Rusyn pronouns are not as simple as pronouns in other languages, due to a case system, which
      is present in all Slavic languages.
      To learn more about the <a href="">Rusyn case system, click here.</a>
    </p>
    <p class="px-9 pt-3">
      Note: where items are separated by a "/" character, the word on the left
      is full (stressed), and the word on the right is short (enclitic/unstressed).
    </p>
    <v-data-table
      id="personal-pronouns"
      :headers="headers"
      :items="items"
      hide-default-footer
      class="px-6"
    />
    <br>
    <h2 class="text-h5 px-9">Resources:</h2>
    <v-flex>
      <v-layout>
        <v-flex md8 class="ml-6 pl-3 pt-2 mb-16" :key="resource" v-for="resource in resources">
          <v-card :href="resource.link" width="25%">
            <v-card-title>{{resource.name}}</v-card-title>
            <v-card-subtitle>{{resource.description}}</v-card-subtitle>
            <v-card-actions>
              <v-spacer />
              <v-btn :href="resource.link" depressed rounded>
                Visit <v-icon class="pl-2">mdi-exit-to-app</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- <br>
    <v-row>
      <v-spacer />
      <v-btn class="grey lighten-1 mr-16 py-6" large>Next Lesson <v-icon>mdi-skip-next-circle-outline</v-icon></v-btn>
    </v-row>
    <br> -->
  </div>
</template>

<script>
export default {
  name: "PersonalPronounsLesson",
  data () {
    return {
      resources: [
        {
          name: "Anki Deck",
          description: "Rusyn personal pronouns Anki Deck",
          link: "https://ankiweb.net/shared/info/1627107564",
        }
      ],
      headers: [
        {
          text: "English",
          align: "start",
          sortable: false,
          value: "english"
        },
        {text: "Nominative", sortable: false, value: "nominative"},
        {text: "Genitive", sortable: false, value: "genitive"},
        {text: "Dative", sortable: false, value: "dative"},
        {text: "Accusative", sortable: false, value: "accusative"},
        {text: "Instrumental", sortable: false, value: "instrumental"},
        {text: "Locative", sortable: false, value: "locative"}
      ],
      items: [
        {
          english: "I",
          nominative: "я",
          genitive: "мене, до мене/ня",
          dative: "менї, ку менї/мі",
          accusative: "мене, на мене/ня",
          instrumental: "мнов",
          locative: "менї/мі",
        },
        {
          english: "you (sg)",
          nominative: "ты",
          genitive: "тебе, до тебе/тя",
          dative: "тобі, ку тобі/ті",
          accusative: "тебе, на тебе/тя",
          instrumental: "тобов",
          locative: "тобі",
        },
        {
          english: "he",
          nominative: "він",
          genitive: "ёго, до нёго/го",
          dative: "ёму, ку нёму/му",
          accusative: "ёго, на нёго/го",
          instrumental: "ним",
          locative: "нїм",
        },
        {
          english: "she",
          nominative: "она, вна",
          genitive: "є, до нёй",
          dative: "їй, ку нїй",
          accusative: "єй, ї, на ню",
          instrumental: "нёв",
          locative: "нїй",
        },
        {
          english: "it",
          nominative: "оно, вно",
          genitive: "ёго, до нёго/го",
          dative: "ёму, ку нёму/му",
          accusative: "ёго, на нёго/го",
          instrumental: "ним",
          locative: "нїм",
        },
        {
          english: "we",
          nominative: "мы",
          genitive: "нас",
          dative: "нам",
          accusative: "нас",
          instrumental: "нами",
          locative: "нас",
        },
        {
          english: "you (pl)",
          nominative: "вы",
          genitive: "вас",
          dative: "вам",
          accusative: "вас",
          instrumental: "вами",
          locative: "вас",
        },
        {
          english: "they",
          nominative: "они, вни",
          genitive: "їх, до них",
          dative: "їм, ку ним",
          accusative: "їх, на них",
          instrumental: "нима",
          locative: "них",
        }
      ]
    }
  }
}
</script>