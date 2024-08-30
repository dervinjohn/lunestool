<!-- eslint-disable max-len -->
<template>
  <!-- <div class="flex flex-col w-1/4 h-full shadow-lg items-center justify-center p-4 bg-blue-950">
      <img src="@/assets/img/lunes-logo-square.png" width="80%" alt="" />
    </div>
    <div class="flex flex-col w-3/4 h-full shadow-lg bg-synthwave bg-cover bg-center">
    </div> -->
  <!-- <LoginDialog v-if="showLoginDialog" v-on:dialog-closed="showLoginDialog = false" /> -->
  <!-- <video playsinline autoplay muted loop poster="cake.jpg"> -->
  <div class="flex flex-col main-container">
    <div class="flex flex-row h-full video-wrapper items-center">
      <video playsinline autoplay muted loop>
        <source src="@/assets/video/synthwave-background.webm" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <!-- <div class="w-1/4 h-1/2 bg-blue-950 absolute z-20 rounded-lg shadow-xl shadow-violet-500/30 shadow-opacity"></div> -->
      <div class="w-1/4 p-8 bg-blue-950 absolute z-20 rounded-xl pink-shadow">
        <div class="flex flex-col w-full h-full rounded-xl ">
          <HeaderText class="mb-2" size="text-4xl">Login</HeaderText>
          <TextField class="mt-2" v-model="email" type="text" label="Email" :error="emailError" />
          <TextField class="mt-2" v-model="password" type="password" label="Password" :error="passwordError" />
          <IconButton class="mt-4" label="Login" color="violet" icon="fa-solid fa-right-to-bracket" block
            v-on:button-clicked="login" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextField from '../components/TextField.vue';
import IconButton from '../components/IconButton.vue';
import HeaderText from '../components/HeaderText.vue';

export default {
  name: 'LandingView',
  components: {
    TextField,
    IconButton,
    HeaderText,
  },
  data() {
    return {
      email: null,
      password: null,
      emailError: false,
      passwordError: false,
    };
  },
  methods: {

    login() {
      console.log('Login');
    },
  },
};
</script>
<style>
video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.video-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pink-shadow {
  box-shadow: -1px -1px 27px 5px rgba(167, 139, 250, 0.6);
  -webkit-box-shadow: -1px -1px 27px 5px rgba(167, 139, 250, 0.6);
  -moz-box-shadow: -1px -1px 27px 5px rgba(167, 139, 250, 0.6);
}

.purple-inset-shadow {
  box-shadow: 0px 0px 30px 2px rgba(109, 40, 217, 0.6) inset;
  -webkit-box-shadow: 0px 0px 30px 2px rgba(109, 40, 217, 0.6) inset;
  -moz-box-shadow: 0px 0px 30px 2px rgba(109, 40, 217, 0.6) inset;
}

/* .login-box {
  background-image: linear-gradient(45deg,
      hsl(226deg 57% 21%) 0%,
      hsl(235deg 49% 24%) 19%,
      hsl(243deg 47% 26%) 27%,
      hsl(248deg 50% 28%) 34%,
      hsl(252deg 53% 29%) 41%,
      hsl(254deg 56% 30%) 47%,
      hsl(257deg 58% 31%) 53%,
      hsl(259deg 60% 32%) 59%,
      hsl(260deg 62% 33%) 66%,
      hsl(261deg 64% 33%) 73%,
      hsl(263deg 66% 34%) 81%,
      hsl(264deg 67% 35%) 100%);
} */

.login-box {
  background-image: linear-gradient(45deg,
      hsl(226deg 57% 21%) 0%,
      hsl(225deg 62% 28%) 72%,
      hsl(224deg 64% 33%) 100%);
}
</style>
