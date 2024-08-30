<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';

export default {

  components: {
    HeaderComponent,
    FooterComponent,
  },

};
</script>
<style>
.main-container {
  height: calc(100vh - 6rem);
  width: 100%;
  background-color: #0F172A;
}
</style>
