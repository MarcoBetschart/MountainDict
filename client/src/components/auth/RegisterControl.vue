<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-3 fw-light fs-5">Register</h5>
            <form @submit.prevent="registerUser">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Max Muster"        
                  v-model="register.name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"        
                  v-model="register.email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="register.password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="d-grid mb-3">
                <button class="btn btn-primary btn-login" type="submit">
                  Sign up
                </button>
              </div>
              <div class="text-center">
                <p>
                  Already have an account?
                  <router-link
                    to="/login"
                    >LogIn</router-link
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
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        
        let response = await axios.post("http://localhost:3000/api/users/register", this.register);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          router.push("/");
          swal("Success", "Registration was successful", "success");
        } else {
          swal("Error", "Something went wrong", "Error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
