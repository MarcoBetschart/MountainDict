<template>
  <div class="row justify-content-center d-flex">
    <div class="col-md-4 d-flex flex-column">
      <div class="rating-box">
        <h1 class="pt-4">
          {{
            Math.round(
              ((fiveStar * 5 +
                fourHalfStar * 4.5 +
                fourStar * 4 +
                threeHalfStar * 3.5 +
                threeStar * 3 +
                twoHalfStar * 2.5 +
                twoStar * 2 +
                oneHalfStar * 1.5 +
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
        <td class="rating-label">4.5 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{
                width: (this.fourHalfStar / this.totalRatings) * 100 + '%',
              }"
            ></div>
          </div>
        </td>
        <td class="text">{{ fourHalfStar }}</td>
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
        <td class="rating-label">3.5 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{
                width: (this.threeHalfStar / this.totalRatings) * 100 + '%',
              }"
            ></div>
          </div>
        </td>
        <td class="text">{{ threeHalfStar }}</td>
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
        <td class="rating-label">2.5 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{ width: (this.twoHalfStar / this.totalRatings) * 100 + '%' }"
            ></div>
          </div>
        </td>
        <td class="text">{{ twoHalfStar }}</td>
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
        <td class="rating-label">1.5 ★</td>
        <td class="rating-bar">
          <div class="bar-container">
            <div
              class="bar"
              :style="{ width: (this.oneHalfStar / this.totalRatings) * 100 + '%' }"
            ></div>
          </div>
        </td>
        <td class="text">{{ oneHalfStar }}</td>
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
    "fourHalfStar",
    "fourStar",
    "threeHalfStar",
    "threeStar",
    "twoHalfStar",
    "twoStar",
    "oneHalfStar",
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
  width: 15%;
  font-weight: bold;
  text-align: right;
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