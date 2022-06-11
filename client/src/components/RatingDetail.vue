<template>
  <div class="row">
    <hr />
    <div class="review-block">
      <div class="row">
        <div class="review-block-rate">
          <StarRatingReadonly :rating="ratingValues.rating" />
        </div>
        <h5>{{ ratingValues.name }}</h5>
        <p>{{ ratingValues.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRatingReadonly from "./StarRatingReadonly.vue";
export default {
  name: "RatingDetails",
  components: {
    StarRatingReadonly,
  },
  props: ["rating"],
  data() {
    return {
      ratingValues: this.rating,
    };
  }
};
</script>

<style scoped>
</style>