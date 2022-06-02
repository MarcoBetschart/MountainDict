<template>
  <MainNavigation />
  <DetailMountain />
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";
import DetailMountain from "@/components/DetailMountain.vue";

export default {
  name: "DetailsView",
  components: {
    MainNavigation,
    DetailMountain
  },
};
</script>
