<template>
  <div class="center">
    <fieldset class="rate">
      <input
        type="checkbox"
        id="rating10"
        name="rating"
        value="5"
        :checked="rating === 5"
      ><label for="rating10" title="5 stars"></label>
      <input
        type="checkbox"
        id="rating9"
        name="rating"
        value="4.5"
        :checked="rating === 4.5"
      ><label class="half" for="rating9" title="4 1/2 stars"></label>
      <input
        type="checkbox"
        id="rating8"
        name="rating"
        value="4"
        :checked="rating === 4"
      ><label for="rating8" title="4 stars"></label>
      <input
        type="checkbox"
        id="rating7"
        name="rating"
        value="3.5"
        :checked="rating === 3.5"
      ><label class="half" for="rating7" title="3 1/2 stars"></label>
      <input
        type="checkbox"
        id="rating5"
        name="rating"
        value="3"
        :checked="rating === 3"
      ><label for="rating5" title="3 stars"></label>
      <input
        type="checkbox"
        id="rating4"
        name="rating"
        value="2.5"
        :checked="rating === 2.5"
      ><label class="half" for="rating4" title="2 1/2 stars"></label>
      <input
        type="checkbox"
        id="rating3"
        name="rating"
        :checked="rating === 2"
      ><label for="rating3" title="2 stars"></label>
      <input
        type="checkbox"
        id="rating2"
        name="rating"
        :checked="rating === 1.5"
      ><label class="half" for="rating2" title="1 1/2 star"></label>
      <input
        type="checkbox"
        id="rating1"
        name="rating"
        :checked="ratingValue === 1"
      ><label for="rating1" title="1 star"></label>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "StarRatingReadonly",
  props: ["rating"],
  data() {
    return {
      ratingValue: this.rating,
    };
  },
};
</script>

<style scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
.rate {
  display: inline-block;
  border: 0;
}
/* Hide checkbox */
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
  font-family: FontAwesome;
  content: "\f005 "; /* full star */
}

/* Half star trick */
.rate .half:before {
  content: "\f089 "; /* half star no outline */
  position: absolute;
  padding-right: 0;
}
input:checked ~ label {
  color: #73b100;
} 

</style>