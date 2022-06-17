<template>
  <MainNavigation />
  <ProfileDetail />
</template>

<script>
import ProfileDetail from "../components/ProfileDetail.vue";
import MainNavigation from "../components/MainNavigation.vue";

export default {
  name: "ProfileView",
  components: {
    MainNavigation,
    ProfileDetail
  },
};
</script>
