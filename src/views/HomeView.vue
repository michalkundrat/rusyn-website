<template>
    <div>
        <div class="page1">
            <p class="pt-6 text-center text-md-h2">Learn Rusyn</p>
            <p class="text-center text-md-h5">
                Welcome to LearnRusyn, the place to learn the Rusyn language.
            </p>
            <p class="text-center text-md-h5">
                Вітайте у LearnRusyn, містце де ся навчиете руснацкый язык.
            </p>
        </div>
        <!-- <div class="page2">
            <p class="pt-6 text-center text-md-h2">Explore Culture</p>
        </div> -->
    </div>
</template>

<style>
.page1 {
    background-image: linear-gradient(to bottom, rgba(224, 224, 224, 0.7), rgba(255, 255, 255, 0)),
    url(../assets/semetkovce.jpg);
    background-size: cover;
    height: 100%;
    width: 100%;
    position: fixed;
}
.page2 {
    background-image: url(../assets/rusyn-culture.jpg);
    background-size: cover;
    height: 100%;
    width: 100%;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},
};
</script>