<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-3 fw-light fs-5">
              New mountain
            </h5>
            <form @submit.prevent="addMountain">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="mountain"
                  v-model="newMountain.name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="comment"
                  v-model="newMountain.description"
                />
                <label for="comment">Description</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="4450.4"
                  v-model="newMountain.height"
                />
                <label for="floatingInput">Height</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="4450.4"
                  v-model="newMountain.longitude"
                />
                <label for="floatingInput">Longitude</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="4450.4"
                  v-model="newMountain.latitude"
                />
                <label for="floatingInput">Latitude</label>
              </div>
              <div class="form-floating mb-3">
                <select
                  class="form-select form-select-sm mb-3"
                  id="select"
                  aria-label=".form-select-sm example"
                  v-model="newMountain.officialPath"
                >
                  <option selected>Wanderweg</option>
                  <option>Bergwanderweg</option>
                  <option>Alpiner Wanderweg</option>
                  <option>Kein offizieller Weg</option>
                </select>
                <label for="select">Path</label>
              </div>
              <div class="form-floating mb-3">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Choose Image </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    accept="image/*"
                    @change="onFileSelected"
                  />
                </div>
              </div>
              <div class="d-grid mb-3">
                <button class="btn btn-primary btn-login" type="submit">
                  Add
                </button>
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
      newMountain: {
        name: "",
        description: "",
        height: null,
        longitude: null,
        latitude: null,
        officialPath: null,
        img: null,
      }
    };
  },
  methods: {
    onFileSelected(event) {
      let formData = new FormData();
      formData.append("file", event.target.files[0]);
      this.newMountain.img = formData;
    },
    async addMountain() {

      try {
        await axios.post(
          "http://localhost:3000/api/mountainitems",
          this.newMountain
        );
        router.push("/");
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    },
  },
};
</script>

<style scoped>
</style>