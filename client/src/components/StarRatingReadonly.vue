<template>
  <div class="rate">
    <input onclick="return false;" type="radio" id="star5" name="rate" :checked="rating == 5" value="5" />
    <label for="star5">5 stars</label>
    <input onclick="return false;" type="radio" id="star4" name="rate" :checked="rating == 4" value="4" />
    <label for="star4">4 stars</label>
    <input onclick="return false;" type="radio" id="star3" name="rate" :checked="rating == 3" value="3" />
    <label for="star3">3 stars</label>
    <input onclick="return false;" type="radio" id="star2" name="rate" :checked="rating == 2" value="2" />
    <label for="star2">2 stars</label>
    <input onclick="return false;" type="radio" id="star1" name="rate" :checked="rating == 1" value="1" />
    <label for="star1">1 star</label>
  </div>
</template>

<script>
export default {
  name: "StarRatingReadonly",
  props: ['rating'],
  data() {
    return {
      ratingValue: this.rating,
    };
  },
};
</script>

<style scoped>
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
</style>