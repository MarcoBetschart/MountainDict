<template>
<section class="cover">
  <div class="cover-caption">
    <div class="container">
      <div class="col-sm-10 offset-sm-1">
        <h1 class="display-3">Welcome to the MountainDict</h1>
        <p>
          Find and rate mountains all over the world.
        </p>
        <br />
        <a href="#nav-main" class="btn btn-outline-light btn-sm" role="button"
          >&darr;</a
        >
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: "CoverView",
};
</script>

<style scoped>
.cover {
  align-items: center;
  background: url("../assets/background.jpg") center center no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  height: 400px;
  text-align: center;
}

.cover-caption {
  width: 100%;
}
</style>
