<template>
  <div>
    <CoverView />
    <NavigationView />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import CoverView from "./components/CoverView.vue";
import NavigationView from "./components/NavigationView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    CoverView,
    NavigationView,
    FooterView,
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
