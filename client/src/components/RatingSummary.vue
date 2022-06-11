<template>
  <div class="row justify-content-center d-flex">
    <div class="col-md-4 d-flex flex-column">
      <div class="rating-box">
        <h1 class="pt-4">
          {{
            Math.round(
              ((fiveStar * 5 +
                fourStar * 4 +
                threeStar * 3 +
                twoStar * 2 +
                oneStar) / totalRatings) *
                2
            ) / 2
          }}
        </h1>
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
    <table>
      <tr>
        <td class="rating-label">5 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{
                width: (this.fiveStar / this.totalRatings) * 100 + '%',
              }"
            ></div>
          </div>
        </td>
        <td class="text">{{ this.fiveStar }}</td>
      </tr>
      <tr>
        <td class="rating-label">4 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{
                width: (this.fourStar / this.totalRatings) * 100 + '%',
              }"
            ></div>
          </div>
        </td>
        <td class="text">{{ fourStar }}</td>
      </tr>
      <tr>
        <td class="rating-label">3 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{
                width: (this.threeStar / this.totalRatings) * 100 + '%',
              }"
            ></div>
          </div>
        </td>
        <td class="text">{{ threeStar }}</td>
      </tr>
      <tr>
        <td class="rating-label">2 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{ width: (this.twoStar / this.totalRatings) * 100 + '%' }"
            ></div>
          </div>
        </td>
        <td class="text">{{ twoStar }}</td>
      </tr>
      <tr>
        <td class="rating-label">1 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{ width: (this.oneStar / this.totalRatings) * 100 + '%' }"
            ></div>
          </div>
        </td>
        <td class="text">{{ oneStar }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "RatingSummary",
  components: {},
  props: [
    "fiveStar",
    "fourStar",
    "threeStar",
    "twoStar",
    "oneStar",
    "totalRatings",
  ],
};
</script>

<style scoped>
.rating-box {
  width: 130px;
  height: 130px;
  margin: auto;
  margin-left: auto;
  background-color: #fbc02d;
  color: #fff;
}

.rating-label, .text {
  width: 10%;
  font-weight: bold;
  text-align: center;
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
  margin-bottom: 5px;
}

.bar {
  width: 0%;
  height: 13px;
  background-color: #fbc02d;
  border-radius: 20px;
}
</style>