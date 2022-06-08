<template>
  <div class="container">
    <div class="row mt-2 mb-2">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">Search</button>
        </div>
      </div>
    </div>
    <div class="card mb-2" v-for="item in items" :key="item._id">
      <img class="card-img-top" v-bind:src="getImagePath(item)" />
      <div class="card-body">
        <h4 class="card-title h5 h4-sm">{{ item.name }}</h4>
        <p class="card-text">{{ item.description }}</p>
        <p class="card-text">{{ item.height }} m.ü.M</p>
        <p class="card-text">Rating: {{ getAvg(item.ratings) }}</p>
        <StarRatingReadonly :rating="getAvg(item.ratings)"/>
        <router-link class="btn btn-primary" aria-current="page" :to="{ name: 'MountainDetails', params: {id: item._id}}">Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRatingReadonly from "./StarRatingReadonly.vue";
export default {
  name: "CardsView",
  components: {
    StarRatingReadonly
  },
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
  methods: {
    getImagePath(imgData) {
      return "http://localhost:3000/" + imgData.img.data;
    },
    getAvg(ratings) {
      let ratingValues = ratings.map(ele=>ele.rating);
      const sum = ratingValues.reduce((a, b) => a + b, 0);
      return Math.round(sum / ratingValues.length || 0);
    },
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

.card {
  flex-direction: row;
  align-items: center;
}
.card-title {
  font-weight: bold;
}
.card img {
  width: 30%;
  border-top-right-radius: 0;
  border-bottom-left-radius: calc(0.25rem - 1px);
}
@media only screen and (max-width: 768px) {
  a {
    display: none;
  }
  .card-body {
    padding: 0.5em 1.2em;
  }
  .card-body .card-text {
    margin: 0;
  }
  .card img {
    width: 50%;
  }
}
@media only screen and (max-width: 1200px) {
  .card img {
    width: 40%;
  }
}
</style>
