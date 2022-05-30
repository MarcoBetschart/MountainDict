<template>
  <div>
    <CoverPicture />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import CoverPicture from "./components/CoverPicture.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    CoverPicture,
    MainFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
