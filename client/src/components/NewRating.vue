<template>
  <div class="container">
    <h4>New Rating</h4>
    <form>
      <div style="float: left">
        <span style="float: left">Rating:</span>
        <br />
    <fieldset class="rate">
      <input
        type="radio"
        id="rating10"
        name="rating"
        value="5"
        :checked="rating == 5"
      /><label for="rating10" title="5 stars"></label>
      <input
        type="radio"
        id="rating9"
        name="rating"
        value="4.5"
        :checked="rating == 4.5"
      /><label class="half" for="rating9" title="4 1/2 stars"></label>
      <input
        type="radio"
        id="rating8"
        name="rating"
        value="4"
        :checked="rating == 4"
      /><label for="rating8" title="4 stars"></label>
      <input
        type="radio"
        id="rating7"
        name="rating"
        value="3.5"
        :checked="rating == 3.5"
      /><label class="half" for="rating7" title="3 1/2 stars"></label>
      <input
        type="radio"
        id="rating5"
        name="rating"
        value="3"
        :checked="rating == 3"
      /><label for="rating5" title="2 1/2 stars"></label>
      <input
        type="radio"
        id="rating4"
        name="rating"
        value="2.5"
        :checked="rating == 2.5"
      /><label class="half" for="rating4" title="2 stars"></label>
      <input
        type="radio"
        id="rating3"
        name="rating"
        value="2"
        :checked="rating == 2"
      /><label for="rating3" title="1 1/2 stars"></label>
      <input
        type="radio"
        id="rating2"
        name="rating"
        value="1.5"
        :checked="rating == 1.5"
      /><label class="half" for="rating2" title="1 star"></label>
      <input
        type="radio"
        id="rating1"
        name="rating"
        value="1"
        :checked="rating == 1"
      /><label for="rating1" title="1/2 star"></label>
    </fieldset>
      </div>
      <br />
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
        type="submit"
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
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
.rate {
  display: inline-block;
  border: 0;
}
/* Hide radio */
.rate > input {
  display: none;
}
/* Order correctly by floating highest to the right */
.rate > label {
  float: right;
}
/* The star of the show */
.rate > label:before {
  display: inline-block;
  font-size: 1.5rem;
  padding: 0.3rem 0.2rem;
  margin: 0;
  cursor: pointer;
  font-family: FontAwesome;
  content: "\f005 "; /* full star */
}

/* Half star trick */
.rate .half:before {
  content: "\f089 "; /* half star no outline */
  position: absolute;
  padding-right: 0;
}
/* Click + hover color */
input:checked ~ label, /* color current and previous stars on checked */
label:hover, label:hover ~ label {
  color: #73b100;
} /* color previous stars on hover */

/* Hover highlights */
input:checked + label:hover, input:checked ~ label:hover, /* highlight current and previous stars */
input:checked ~ label:hover ~ label, /* highlight previous selected stars for new rating */
label:hover ~ input:checked ~ label /* highlight previous selected stars */ {
  color: #a6e72d;
}
</style>