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
                  v-bind:class="{
                    'form-control': true,
                    'is-invalid': !validName(newMountain.name) && nameBlured,
                  }"
                  v-on:blur="nameBlured = true"
                  v-on:focus="nameBlured = false"
                />
                <label for="floatingInput">Name</label>
                <div class="invalid-feedback">Name is required</div>
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
                  v-bind:class="{
                    'form-control': true,
                    'is-invalid': !validHeight(newMountain.height) && heightBlured,
                  }"
                  v-on:blur="heightBlured = true"
                  v-on:focus="heightBlured = false"
                />
                <label for="floatingInput">Height</label>
                <div class="invalid-feedback">Height has to be greater than 0</div>
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
                  v-bind:class="{
                    'form-control': true,
                    'is-invalid': !validPath(newMountain.officialPath) && pathBlured,
                  }"
                  v-on:blur="pathBlured = true"
                  v-on:focus="pathBlured = false"
                >
                  <option selected>Wanderweg</option>
                  <option>Bergwanderweg</option>
                  <option>Alpiner Wanderweg</option>
                  <option>Kein offizieller Weg</option>
                </select>
                <label for="select">Path</label>
                <div class="invalid-feedback">Path is required</div>
              </div>
              <div class="form-floating mb-3">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Choose Image</label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    accept="image/*"
                    @change="onFileSelected"
                  v-bind:class="{
                    'form-control': true,
                    'is-invalid': !validImg(selectedimage) && imgBlured,
                  }"
                  v-on:blur="imgBlured = true"
                  v-on:focus="imgBlured = false"
                  />
                <div class="invalid-feedback">Image is required</div>
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
      },
      selectedimage: null,
      nameBlured: false,
      heightBlured: false,
      pathBlured: false,
      imgBlured: false,
      valid: false,
      submitted: false,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedimage = event.target.files[0];
    },
    async addMountain() {
      this.validate();
      if (this.valid === true) 
        return;
      let formdata = new FormData();
      formdata.append("img", this.selectedimage, this.selectedimage.name);
      formdata.append("name", this.newMountain.name);
      formdata.append("description", this.newMountain.description);
      formdata.append("height", this.newMountain.height);
      // formdata.append('longitude', this.newMountain.longitude)
      // formdata.append('latitude', this.newMountain.latitude)
      formdata.append("officialPath", this.newMountain.officialPath);
      try {
        await axios.post("/api/mountainitems", formdata);
        router.push("/");
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.message, "error");
        } else {
          swal("Error", error.err.message, "error");
        }
      }
    },
    validate: function () {
      this.valid = false
      this.nameBlured = true;
      this.heightBlured = true;
      this.pathBlured = true;
      this.imgBlured = true;

      let nameValid = this.validName(this.newMountain.name);
      let heightValid = this.validHeight(this.newMountain.height)
      let pathValid = this.validPath(this.newMountain.path)
      let imgValid = this.validImg(this.newMountain.img)

      if (nameValid && heightValid && imgValid && pathValid) {
        this.valid = true;
      }
    },
    validName: function (name) {
      return name !== '';
    },
    validHeight: function (height) {
      return height > 0;
    },
    validPath: function (path) {
      return path !== '' && path !== null && path !== undefined;
    },
    validImg: function (img) {
      return img !== null;
    },
  },
};
</script>

<style scoped>
</style>