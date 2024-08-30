<template>
  <div class="flex flex-row m-2 mx-auto w-full h-16
          bg-red-400 rounded-lg p-6 items-center">
    <div class="w-2/12">
      <font-awesome-icon icon="fa-solid fa-triangle-exclamation" size="2x" class="mx-auto
                  self-center text-white" />
    </div>
    <div class="w-10/12">
      <p class="text-white font-poppins font-light
              text-sm"> {{ textDisplayed }}</p>
    </div>
  </div>
</template>
<script>
export default {

  name: 'AlertDialog',
  props: {
    text: String,
  },
  data() {
    return {
      textDisplayed: '',
    };
  },
  mounted() {
    if (!this.text) {
      this.textDisplayed = '';
    } else {
      this.textDisplayed = this.text;
    }
  },

};
</script>
