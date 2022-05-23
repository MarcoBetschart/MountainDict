<template>
  <CoverView />
  <NavigationView />
  <!-- <JumbotronView />
  <CTAView /> -->
  <CardsView />
  <FooterView />
</template>

<script>
import CoverView from './components/CoverView.vue'
import NavigationView from './components/NavigationView.vue'
// import JumbotronView from './components/JumbotronView.vue'
// import CTAView from './components/CTAView.vue'
import CardsView from './components/CardsView.vue'
import FooterView from './components/FooterView.vue'

export default {
  name: 'App',
  components: {
    CoverView,
    NavigationView,
    // JumbotronView,
    // CTAView,
    CardsView,
    FooterView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
