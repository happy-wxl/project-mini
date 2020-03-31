<template>
  <div class="home">
home
    <nav-header />
    <router-view />
    <nva-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from "../components/NavHeader";
import NvaFooter from "../components/NvaFooter";
export default {
  name: 'Home',
  components: {
    NavHeader,
    NvaFooter
  }
}
</script>
