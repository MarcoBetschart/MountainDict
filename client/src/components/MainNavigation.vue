<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-main">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/logo.png"
          alt="Mountaindict"
          style="width: 32px; height: 32px"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/new"
              >New mountain</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto nav-flex-icons">
          <li class="nav-item" v-if="user.name != null">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="iconToggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person"></i> Profile
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
            <router-link class="dropdown-item" aria-current="page" to="/profile"
              >Profile</router-link
            ></li>
              <li><a class="dropdown-item" @click="logUserOut">Logout</a></li>
            </ul>
          </li>
          <li class="nav-item" v-if="user.name == null">
            <router-link class="nav-link" aria-current="page" to="/login"
              >LogIn</router-link
            >
          </li>
          <li class="nav-item" v-if="user.name == null">
            <router-link class="nav-link" aria-current="page" to="/register"
              >Sign up</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "@/router";
import VueJwtDecode from "vue-jwt-decode";

export default {
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
    logUserOut() {
      localStorage.removeItem("jwt");
      router.go();
      router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style scoped>
</style>
