<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-3 fw-light fs-5">Sign In</h5>
            <form @submit.prevent="loginUser">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"        
                  v-model="login.email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="login.password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberPasswordCheck"
                />
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid mb-3">
                <button class="btn btn-primary btn-login" type="submit">
                  Sign in
                </button>
              </div>
              <div class="text-center">
                <p>
                  Not a member?
                  <router-link
                    to="/register"
                    >Register</router-link
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await axios.post("http://localhost:3000/api/users/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          router.push("/");
        }
      } catch (err) {
        swal("Error", "Something went wrong", "error");
        console.log(err.response);
      }
    }
  }
};
</script>

<style scoped>
</style>
