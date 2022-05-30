<template>
  <NavigationView />
  <CardsView />
</template>

<script>
import CardsView from "../components/CardsView.vue";
import NavigationView from "@/components/NavigationView.vue";

export default {
  name: "HomeView",
  components: {
    NavigationView,
    CardsView
  },
};
</script>
