<template>
  <MainNavigation />
  <Cards />
</template>

<script>
import Cards from "../components/Cards.vue";
import MainNavigation from "@/components/MainNavigation.vue";

export default {
  name: "HomeView",
  components: {
    MainNavigation,
    Cards
  },
};
</script>
