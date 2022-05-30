<template>
  <MainNavigation/>
  <Login />
</template>
<script>
import Login from "@/components/auth/LoginControl";
import MainNavigation from "@/components/MainNavigation.vue";
export default {
  components: {
    Login,
    MainNavigation
}
};
</script>