<template>
  <v-container class="fill-height">
    <div id="main">
      <v-row justify="center">
        <span class="text-center">
          Do you want to submit a lesson about Rusyn? If so, please follow the
          steps that are shown below.
        </span>
        <ul>
          <li>Write a full lesson using Word or Powerpoint appropriately</li>
          <li>Send to ihavezerohealth#5451 via Discord</li>
          <li>After review, your lesson will be uploaded to the website!</li>
        </ul>
      </v-row>
    </div>
    <div id="main2">
      <v-row justify="center">
        <span>
          Why do we work on this website? I always work on this website whenever I can, because I
          believe that it is important to spread knowledge and information,
          something which the earlier generations did not have
          access to. We would greatly appreciate contributions from all of you!
          <a href="https://www.github.com/ihavezerohealth/LearnRusyn">
            GitHub Repository</a>
        </span>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "LessonSubmitPlan",
  components: {},
};
</script>

<style>
#main {
  background-image: url("https://s35691.pcdn.co/wp-content/uploads/2021/11/day-picture-id1163588010.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
