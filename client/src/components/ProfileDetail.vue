<template>
  <div class="container">
    <div class="card mb-2">
      <div class="card-body">
        <h4 class="card-title h5 h4-sm">{{ user.name }}</h4>
        <p class="card-text">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "ProfileDetail",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      if (localStorage.getItem("jwt") == null) {
        return;
      }
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style scoped>
</style>
