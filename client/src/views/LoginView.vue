<template>
  <NavigationView/>
  <Login />
</template>
<script>
import Login from "@/components/auth/LoginControl";
import NavigationView from "@/components/NavigationView.vue";
export default {
  components: {
    Login,
    NavigationView
}
};
</script>