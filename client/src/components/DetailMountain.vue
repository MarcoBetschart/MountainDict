<template>
  <div class="container">
    <div class="row mt-2 mb-2">
      <div class="card mb-2">
        <div class="card-body">
          <img
            class="card-img-top"
            v-bind:src="getImagePath(mountainItem.img)"
          />
          <h4 class="card-title h5 h4-sm">{{ mountainItem.name }}</h4>
          <p class="card-text">{{ mountainItem.description }}</p>
          <p class="card-text">{{ mountainItem.height }} m.ü.M</p>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "DetailMountain",
  data() {
    return {
      mountainItem: {
        name: "",
        description: "",
        height: null,
        longitude: null,
        latitude: null,
        officialPath: null,
        img: null,
      },
    };
  },
  async mounted() {
    const route = useRoute();
    const response = await axios.get("api/mountainitems/" + route.params.id);
    this.mountainItem.name = response.data.name;
    this.mountainItem.description = response.data.description;
    this.mountainItem.height = response.data.height;
    this.mountainItem.longitude = response.data.longitude;
    this.mountainItem.latitude = response.data.latitude;
    this.mountainItem.officialPath = response.data.officialPath;
    this.mountainItem.img = response.data.img.data;
  },
  methods: {
    getImagePath(imgData) {
      return "http://localhost:3000/" + imgData;
    },
  },
};
</script>

<style scoped>
</style>
