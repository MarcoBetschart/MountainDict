<template>
  <MainNavigation />
  <NewMountain />
</template>

<script>
import NewMountain from "../components/NewMountain.vue";
import MainNavigation from "../components/MainNavigation.vue";

export default {
  name: "HomeView",
  components: {
    MainNavigation,
    NewMountain
  },
};
</script>
