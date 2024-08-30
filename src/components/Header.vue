<!-- eslint-disable max-len -->
<template>
  <!-- <header class="shadow-lg bar-gradient-down sticky top-0 z-50 flex flex-row items-center h-14
  justify-between"> -->
  <header class="shadow-lg bg-indigo-900 sticky top-0 z-50 flex flex-row items-center h-14
  justify-between">
    <div class="flex justify-between p-4 h-full">

      <div class="flex space-x-4 flex-row h-full items-center justify-center">
        <img src="@/assets/img/lunes-logo-sm.png" alt="" class="h-12" />
        <!-- <p class="font-wix text-xl font-semibold text-orange-700">Lunes</p> -->
      </div>

    </div>
    <!-- <div class="dropdown flex relative items-center bg-indigo-900
    h-full hover:bg-indigo-900 cursor-pointer  px-4 justify-center w-64 text-left"> -->
    <!-- <p class=" text-white font-wix
      font-light text-md w-full text-left flex flex-row justify-between">
        {{ getLoggedInUser.username }}
        <font-awesome-icon icon="fa-solid fa-caret-down" size="1x" class="text-white
          cursor-pointer ml-2" />
      </p>
      <div class="dropdown-menu absolute hidden mt-40 bg-white w-full
      text-md font-poppins shadow-lgflex flex-col justify-start">
        <div class="flex flex-row pt-3">
          <div class="flex flex-row h-10 w-10 justify-center items-center pl-2">
            <font-awesome-icon icon="fa-solid fa-user" size="1x" class="text-stone-800
            cursor-pointer" />
          </div>
          <div class="flex flex-col bg-white ml-4">
            <p class="text-left text-md font-wix font-semibold">{{ getLoggedInUser.name }} </p>
            <p class="text-left mb-2 text-sm font-wix">{{ getLoggedInUser.role }}</p>
          </div>
        </div>
        <div class="flex flex-col bg-white py-2 px-4 hover:bg-stone-200">
          <p @click="logout" @keydown="bar" class="text-stone-700 font-wix text-left">
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" size="1x" class="text-stone-700
          cursor-pointer" /> &nbsp;
            Logout
          </p>
        </div>
      </div> -->
    <!-- </div> -->

  </header>
</template>
<script>
// import PrimaryButton from './PrimaryButton.vue';
// import { getAuth, signOut } from 'firebase/auth';
// import { mapGetters } from 'vuex';

export default {
  name: 'HeaderComponent',
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

/* .bar-gradient-down {
  background-image: linear-gradient(180deg,
      hsl(242deg 47% 34%) 0%,
      hsl(244deg 49% 35%) 21%,
      hsl(247deg 51% 35%) 30%,
      hsl(249deg 53% 35%) 39%,
      hsl(251deg 55% 35%) 46%,
      hsl(254deg 57% 35%) 54%,
      hsl(256deg 59% 35%) 61%,
      hsl(259deg 61% 35%) 69%,
      hsl(261deg 64% 35%) 79%,
      hsl(264deg 67% 35%) 100%);
} */

.bar-gradient-down {
  background-image: linear-gradient(180deg,
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
