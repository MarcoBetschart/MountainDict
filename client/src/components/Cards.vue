<template>
  <div class="container">
  <div class="row mt-2 mb-2">
    <div class="input-group">
    <input type="text" class="form-control" placeholder="Search">
    <div class="input-group-append">
      <button class="btn btn-primary" type="button">
        Search
      </button>
    </div>
  </div>
  </div>
      <div class="card flex-row mb-2" v-for="item in items" :key="item.id">
        <img
          class="card-img-left example-card-img-responsive"
          src="https://picsum.photos/id/200/320/320"
        />
        <div class="card-body">
          <h4 class="card-title h5 h4-sm">{{ item.name }}</h4>
          <p class="card-text">{{ item.description }}</p>
          <p class="card-text">{{ item.height }} m.ü.M</p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CardsView",
  data() {
    return {
      items: [],
      description: "",
      editedDescription: "",
      selected: {},
    };
  },
  async mounted() {
    const response = await axios.get("api/mountainitems/");
    this.items = response.data;
  },
};
</script>

<style scoped>
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
</style>
