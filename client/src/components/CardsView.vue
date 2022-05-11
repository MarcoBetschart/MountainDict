<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card" v-for="(item) in items" :key="item.name">
          <img class="card-img-top" src="https://picsum.photos/id/200/320/320" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              {{ item.name }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
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
      selected: {}
    };
  },
  async mounted() {
    const response = await axios.get("api/mountainitems/");
    this.items = response.data;
  }
}
</script>

<style scoped>
</style>
