<template>
  <div class="container">
    <h4>New Rating</h4>
    <form>
      <div style="float: left">
        <span style="float: left">Rating:</span>
        <br />
        <div class="rate">
          <input
            type="radio"
            id="star5"
            name="rate"
            :checked="rating.rating == 5"
            value="5"
            @change="this.rating.rating = 5"
          />
          <label for="star5" title="text">5 stars</label>
          <input
            type="radio"
            id="star4"
            name="rate"
            :checked="rating.rating == 4"
            value="4"
            @change="this.rating.rating = 4"
          />
          <label for="star4" title="text">4 stars</label>
          <input
            type="radio"
            id="star3"
            name="rate"
            :checked="rating.rating == 3"
            value="3"
            @change="this.rating.rating = 3"
          />
          <label for="star3" title="text">3 stars</label>
          <input
            type="radio"
            id="star2"
            name="rate"
            :checked="rating.rating == 2"
            value="2"
            @change="this.rating.rating = 2"
          />
          <label for="star2" title="text">2 stars</label>
          <input
            type="radio"
            id="star1"
            name="rate"
            :checked="rating.rating == 1"
            value="1"
            @change="this.rating.rating = 1"
          />
          <label for="star1" title="text">1 star</label>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="form-group">
        <label for="comment" style="float: left">Comment:</label>
        <textarea
          class="form-control"
          rows="5"
          id="comment"
          v-model="this.rating.description"
        ></textarea>
      </div>
      <br />
      <button
        class="btn btn-primary btn-login"
        type="button"
        @click="AddRating"
      >
        Add
      </button>
    </form>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "NewRating",
  data() {
    return {
      rating: {
        rating: 0,
        description: "",
        name: "",
      },
      mountainItem: this.mountainitem,
    };
  },
  props: ["mountainitem"],
  methods: {
    async AddRating() {
      this.rating.name = this.getUserName();
      console.log(this.rating);
      let formdata = new FormData();
      formdata.append("img", this.mountainitem.img);
      formdata.append("name", this.mountainitem.name);
      formdata.append("description", this.mountainitem.description);
      formdata.append("height", this.mountainitem.height);
      formdata.append("longitude", this.mountainitem.longitude);
      formdata.append("latitude", this.mountainitem.latitude);
      formdata.append("officialPath", this.mountainitem.officialPath);
      try {
        let res = await axios.get(
          "http://localhost:3000/api/mountainitems/" + this.mountainItem._id
        );
        let ratings = res.data.ratings;
        ratings.push(this.rating);
        formdata.append("ratings", ratings);
        await axios.put(
          "http://localhost:3000/api/mountainitems/" + this.mountainItem._id,
          res.data
        );
      } catch (err) {
        console.log(err);
      }
    },
    getUserName() {
      if (localStorage.getItem("jwt") == null) {
        return;
      }
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      return decoded.name;
    },
  },
};
</script>

<style scoped>
.rate {
  height: 30px;
  float: left;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}
</style>