<template>
  <div class="register">
    <NavigationView/>
    <Register />
  </div>
</template>
<script>
import Register from "@/components/auth/RegisterControl";
import NavigationView from "@/components/NavigationView.vue";
export default {
  components: {
    NavigationView,
    Register
}
};
</script>