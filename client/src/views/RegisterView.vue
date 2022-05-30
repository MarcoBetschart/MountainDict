<template>
  <div class="register">
    <MainNavigation/>
    <Register />
  </div>
</template>
<script>
import Register from "@/components/auth/RegisterControl";
import MainNavigation from "@/components/MainNavigation.vue";
export default {
  components: {
    MainNavigation,
    Register
}
};
</script>