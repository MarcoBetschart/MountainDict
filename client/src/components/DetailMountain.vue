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
          <div class="ratings">
            <hr />

            <NewRating :mountainitem="mountainItem" v-if="!hasCommented" />
            <h5 v-else>
              You already added a rating for this mountain.
            </h5>
            <RatingSummary
              :fiveStar="fiveStar"
              :fourHalfStar="fourHalfStar"
              :fourStar="fourStar"
              :threeHalfStar="threeHalfStar"
              :threeStar="threeStar"
              :twoHalfStar="twoHalfStar"
              :twoStar="twoStar"
              :oneHalfStar="oneHalfStar"
              :oneStar="oneStar"
              :totalRatings="totalRatings"
            />
            <div
              class="row"
              v-for="rating in mountainItem.ratings"
              :key="rating._id"
            >
              <hr />
              <StarRatingReadonly
                :id="rating._id"
                :rating="rating.rating"
              ></StarRatingReadonly>
              <div class="row">
                <h5>{{ rating.name }}</h5>
                <p>{{ rating.description }}</p>
              </div>
            </div>
          </div>
          <div class="container">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <button
                    type="button"
                    class="page-link"
                    v-if="page != 1"
                    @click="page--"
                  >
                    Previous
                  </button>
                </li>
                <li class="page-item">
                  <button
                    type="button"
                    class="page-link"
                    v-for="pageNumber in pages.slice(page - 1, page + 5)"
                    :key="pageNumber"
                    @click="page = pageNumber"
                  >
                    {{ pageNumber }}
                  </button>
                </li>
                <li class="page-item">
                  <button
                    type="button"
                    @click="page++"
                    v-if="page < pages.length"
                    class="page-link"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import RatingSummary from "./RatingSummary.vue";
import NewRating from "./NewRating.vue";
import StarRatingReadonly from "./StarRatingReadonly";
import VueJwtDecode from "vue-jwt-decode";

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
        ratings: null,
        _id: null,
      },
      page: 1,
      perPage: 9,
      pages: [],

      fiveStar: null,
      fourHalfStar: null,
      fourStar: null,
      threeHalfStar: null,
      threeStar: null,
      twoHalfStar: null,
      twoStar: null,
      oneHalfStar: null,
      oneStar: null,
      totalRatings: null,

      hasCommented: false,
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
    this.mountainItem.ratings = response.data.ratings;
    this.mountainItem._id = response.data._id;
    this.totalRows = this.mountainItem.ratings.length;

    this.fiveStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 5
    ).length;
    this.fourHalfStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 4.5
    ).length;
    this.fourStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 4
    ).length;
    this.threeHalfStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 3.5
    ).length;
    this.threeStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 3
    ).length;
    this.twoHalfStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 2.5
    ).length;
    this.twoStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 2
    ).length;
    this.oneHalfStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 1.5
    ).length;
    this.oneStar = this.mountainItem.ratings.filter(
      (r) => r.rating == 1
    ).length;
    this.totalRatings = this.mountainItem.ratings.length;


    if (this.mountainItem.ratings.length === 0) {
      this.hasCommented = false;
    } else {
      this.hasCommented = this.mountainItem.ratings.some(
        (x) => x.name === this.getUserName()
      );
    }
  },
  methods: {
    getUserName() {
      if (localStorage.getItem("jwt") == null) {
        return;
      }
      let token = localStorage.getItem("jwt");
      return VueJwtDecode.decode(token).name;
    },
    getImagePath(imgData) {
      if (imgData != null) return "http://localhost:3000/" + imgData;
    },
    setPages() {
      let numberOfPages = Math.ceil(
        this.mountainItem.ratings.length / this.perPage
      );
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(ratings) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return ratings.slice(from, to);
    },
  },
  computed: {
    displayedRatings() {
      return this.paginate(this.mountainItem.ratings);
    },
  },
  watch: {
    ratings() {
      this.setPages();
    },
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  components: { RatingSummary, NewRating, StarRatingReadonly },
};
</script>

<style scoped>
.pagination {
  height: 50px;
  font-size: 19;
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
