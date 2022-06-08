<template>
  <div class="row">
    <hr />
    <div class="row justify-content-left d-flex">
      <div class="col-md-4 d-flex flex-column">
        <div class="rating-box">
          <h1 class="pt-4">4.0</h1>
          <p class="">out of 5</p>
        </div>
        <div>
          <span class="fa fa-star star-active mx-1"></span>
          <span class="fa fa-star star-active mx-1"></span>
          <span class="fa fa-star star-active mx-1"></span>
          <span class="fa fa-star star-active mx-1"></span>
          <span class="fa fa-star star-inactive mx-1"></span>
        </div>
      </div>
      <div class="col-md-8">
        <div class="rating-bar0 justify-content-center">
          <table class="text-left mx-auto">
            <tr>
              <td class="rating-label">Excellent</td>
              <td class="rating-bar">
                <div class="bar-container">
                  <div class="bar-5"></div>
                </div>
              </td>
              <td class="text-right">123</td>
            </tr>
            <tr>
              <td class="rating-label">Good</td>
              <td class="rating-bar">
                <div class="bar-container">
                  <div class="bar-4"></div>
                </div>
              </td>
              <td class="text-right">23</td>
            </tr>
            <tr>
              <td class="rating-label">Average</td>
              <td class="rating-bar">
                <div class="bar-container">
                  <div class="bar-3"></div>
                </div>
              </td>
              <td class="text-right">10</td>
            </tr>
            <tr>
              <td class="rating-label">Poor</td>
              <td class="rating-bar">
                <div class="bar-container">
                  <div class="bar-2"></div>
                </div>
              </td>
              <td class="text-right">3</td>
            </tr>
            <tr>
              <td class="rating-label">Terrible</td>
              <td class="rating-bar">
                <div class="bar-container">
                  <div class="bar-1"></div>
                </div>
              </td>
              <td class="text-right">0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import StarRatingReadonly from "./StarRatingReadonly.vue";
export default {
  name: "RatingSummary",
  components: {
    // StarRatingReadonly
  },
  props: ["ratings"],
  data() {
    return {
      ratingValues: this.ratings,
    };
  },
};
</script>

<style scoped>
.rating-box {
  width: 130px;
  height: 130px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fbc02d;
  color: #fff;
}

.rating-label {
  font-weight: bold;
}

.rating-bar {
  width: 80%;
  padding: 8px;
  border-radius: 5px;
}

.bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 5px;
}

.bar-5 {
  width: 70%;
  height: 13px;
  background-color: #fbc02d;
  border-radius: 20px;
}

.bar-4 {
  width: 30%;
  height: 13px;
  background-color: #fbc02d;
  border-radius: 20px;
}

.bar-3 {
  width: 20%;
  height: 13px;
  background-color: #fbc02d;
  border-radius: 20px;
}

.bar-2 {
  width: 10%;
  height: 13px;
  background-color: #fbc02d;
  border-radius: 20px;
}

.bar-1 {
  width: 0%;
  height: 13px;
  background-color: #fbc02d;
  border-radius: 20px;
}
</style>