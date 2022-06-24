<template>
  <MainNavigation />
  <PageNotFound />
</template>

<script>
import PageNotFound from "../components/PageNotFound.vue";
import MainNavigation from "../components/MainNavigation.vue";

export default {
  name: "PageNotFoundView",
  components: {
    MainNavigation,
    PageNotFound
  },
};
</script>
