<template>
  <!-- eslint-disable-next-line max-len -->
  <div class="fixed inset-0 bg-black bg-opacity-80 overflow-y-auto h-full w-full flex  z-50 items-center">

    <div class="mx-auto w-3/12 shadow-lg
          rounded-xl bg-slate-700 flex transition-all
          duration-200" :class="showDialog ? 'opacity-100' : 'opacity-0'">

      <div class="w-full flex flex-col p-8 align-center justify-center">
        <div class="w-full relative flex justify-center h-36">
          <font-awesome-icon icon="fa-regular fa-circle-check" size="8x" class="mx-auto
                  text-teal-400 animate-ping absolute top-8 z-10 " />
          <font-awesome-icon icon="fa-regular fa-circle-check" size="8x" class="mx-auto
                  text-slate-200 absolute top-8 z-20" />
        </div>
        <h3 class="font-lato text-2xl mb-4 mt-8 text-center text-slate-200">
          <slot></slot>
        </h3>

        <div class="flex flex-row w-full space-x-2">

          <!-- eslint-disable-next-line max-len -->
          <IconButton class="mx-auto" icon="fa-regular fa-circle-check" label="Ok" v-on:button-clicked="k" block />

        </div>

      </div>
    </div>

  </div>
</template>
<script>
import IconButton from './IconButton.vue';

export default {
  name: 'ProjectMenu',
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
    k() {
      this.$emit('k');
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
