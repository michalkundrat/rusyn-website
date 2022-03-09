<template>
  <v-container fluid class="fill-width fill-height">
    <v-row justify="center">
      <v-col cols="2">
        <v-img
          src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png"
          max-width="320px"
          max-height="192px"
          class="mb-n2"
        />
      </v-col>
      <v-col cols="2">
        <h1 class="text-heading-1 font-weight-medium">Discord</h1>
        <v-divider></v-divider>
        <span class="text-body-1">ihavezerohealth#5451</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="2">
        <v-img
          src="data:image/png;base64,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"
          max-width="320px"
          max-height="192px"
          class="mb-n2"
        />
      </v-col>
      <v-col cols="2">
        <h1 class="text-heading-1 font-weight-medium">Email</h1>
        <v-divider></v-divider>
        <span class="text-body-1"><a href="mailto:michallahcim01@gmail.com">michallahcim01@gmail.com</a></span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Contact",
  components: {},
};
</script>