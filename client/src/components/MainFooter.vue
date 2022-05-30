<template>
  <footer class="bg-dark text-center text-white">
    <div class="container p-4">
      <section class="">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Social Media</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a
                  class="btn btn-outline-light m-1"
                  href="https://www.linkedin.com/in/marco-betschart-36817b1b5/"
                  role="button"
                  ><i class="bi bi-linkedin"></i
                ></a>
              </li>
              <li>
                <a
                  class="btn btn-outline-light m-1"
                  href="https://github.com/MarcoBetschart"
                  role="button"
                  ><i class="bi bi-github"></i
                ></a>
              </li>
              <li>
                <a
                  class="btn btn-outline-light m-1"
                  href="https://www.instagram.com/_el_presidente__/"
                  role="button"
                  ><i class="bi bi-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Quick links</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <router-link class="text-white" aria-current="page" to="/"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link class="text-white" aria-current="page" to="/search"
                  >Search</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright:
      <a class="text-white" href="localhost:8080/">MountainDict.ch</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
</style>
