<!-- eslint-disable max-len -->
<template>
  <footer class="shadow-lg bg-indigo-900 top-0 z-50 flex flex-row items-center h-10
    justify-between">

    <div class="flex flex-row w-full h-full items-center justify-center">
      <!-- <img src="@/assets/img/logos.png" alt="" class="h-8" /> -->
      <p class="font-lato text-sm font-semibold text-white">&copy;2023 | GRIDS | v.1.0.0</p>

    </div>

  </footer>
</template>
<script>
// import PrimaryButton from './PrimaryButton.vue';
// import { getAuth, signOut } from 'firebase/auth';
// import { mapGetters } from 'vuex';

export default {
  name: 'FooterComponent',
  components: {
    // PrimaryButton,
  },
  methods: {
    logout() {
      // const auth = getAuth();
      // signOut(auth)
      //   .then(() => {
      //     // Sign-out successful.
      // this.$store.commit('setUser', {});
      // this.$router.push('/');
      // })
      // .catch((error) => {
      //   // An error happened.
      //   console.log(error);
      // });
    },
    // logout() {
    //   console.log('logout!');
    // },
    bar() {
      console.log('keydown');
    },
  },
  // computed: {
  //   ...mapGetters(['getLoggedInUser']),
  // },
};
</script>
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

.bar-gradient-down {
  background-image: linear-gradient(0deg,
      hsl(244deg 47% 20%) 0%,
      hsl(243deg 47% 22%) 21%,
      hsl(243deg 47% 23%) 30%,
      hsl(243deg 47% 25%) 39%,
      hsl(243deg 47% 26%) 46%,
      hsl(243deg 47% 28%) 54%,
      hsl(243deg 47% 29%) 61%,
      hsl(242deg 47% 31%) 69%,
      hsl(242deg 47% 33%) 79%,
      hsl(242deg 47% 34%) 100%);
}
</style>
