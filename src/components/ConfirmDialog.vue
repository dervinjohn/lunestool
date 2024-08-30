<template>
  <!-- eslint-disable-next-line max-len -->
  <div class="fixed inset-0 bg-black bg-opacity-80 overflow-y-auto h-full w-full flex  z-50 items-center">

    <div class="mx-auto w-3/12 shadow-lg
        rounded-md bg-slate-700 flex transition-all
        duration-200" :class="showDialog ? 'opacity-100' : 'opacity-0'">

      <div class="w-full flex flex-col p-8 align-center justify-center">
        <div class="w-full relative flex justify-center h-36">
          <font-awesome-icon icon="fa-regular fa-circle-question" size="8x" class="mx-auto
                text-violet-400 animate-ping absolute top-8 z-10 " />
          <font-awesome-icon icon="fa-regular fa-circle-question" size="8x" class="mx-auto
                text-slate-200 absolute top-8 z-20" />
        </div>
        <h3 class="font-lato text-white text-2xl mb-2 mt-8 text-center">
          <slot></slot>
        </h3>

        <div class="flex flex-row w-full space-x-2 mt-4">
          <div class="flex w-1/2">
            <!-- eslint-disable-next-line max-len -->
            <IconButton class="mx-auto" label="Yes" v-on:button-clicked="yes" block color="teal"
              icon="fa-regular fa-circle-check" />
          </div>
          <div class="flex w-1/2">
            <!-- eslint-disable-next-line max-len -->
            <IconButton class="mx-auto" label="No" v-on:button-clicked="no" block color="pink"
              icon="fa-regular fa-circle-xmark" />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
import IconButton from './IconButton.vue';

export default {
  name: 'ProjectMenu',
  props: {
    prompt: String,
  },
  components: {
    IconButton,
  },
  data() {
    return {
      showDialog: false,
    };
  },
  async mounted() {
    await this.delay(50);
    this.showDialog = true;
    // this.db = getFirestore();
  },

  methods: {
    yes() {
      this.$emit('yes');
      this.$emit('dialog-closed');
    },
    no() {
      this.$emit('no');
      this.$emit('dialog-closed');
    },
    async delay(duration) {
      return new Promise((resolve) => {
        setTimeout(resolve, duration);
      });
    },
  },

};
</script>
