<!-- eslint-disable max-len -->
<template>
  <button v-if="!iconOnly && buttonReady" class="rounded-lg
    py-2 px-12 font-oswald font-medium text-md transition-color duration-200
    text-white text-center"
    :class="`${colorMap[buttonColor]} ${block ? 'w-full' : 'w-56'} ${hoverColorMap[buttonColor]} ${small ? 'h-8' : ''}`"
    @click="clicked">
    <!-- eslint-disable-next-line max-len -->
    <font-awesome-icon v-if="loading" class="animate-spin mx-auto self-center text-white ml-4" icon="fa-solid fa-spinner"
      size="1x" />
    <font-awesome-icon v-else-if="!loading && icon != ''" class="mx-auto self-center text-white mr-2" :icon="icon"
      size="1x" />
    {{ loading ? 'Please wait...' : label }}
  </button>
  <button v-else class="rounded-lg
    py-2 px-2 font-oswald font-medium text-md transition-color duration-200
    text-white text-center" :class="`${colorMap[buttonColor]} ${hoverColorMap[buttonColor]} ${small ? 'h-8' : ''}`"
    @click="clicked">
    <!-- eslint-disable-next-line max-len -->
    <font-awesome-icon class="mx-auto self-center text-white" :icon="icon" size="1x" />
  </button>
</template>
<script>

export default {
  name: 'PrimaryButton',
  props: {
    label: String,
    loading: Boolean,
    block: Boolean,
    color: String,
    small: Boolean,
    icon: String,
    iconOnly: Boolean,

  },
  data() {
    return {
      buttonColor: 'sky',
      buttonReady: false,
      colorMap: {
        emerald: 'bg-emerald-500',
        green: 'bg-green-500',
        sky: 'bg-sky-400',
        amber: 'bg-amber-400',
        red: 'bg-red-500',
        purple: 'bg-purple-400',
        orange: 'bg-orange-500',
        violet: 'bg-violet-400',
        cyan: 'bg-cyan-400',
        slate: 'bg-slate-400',
        teal: 'bg-teal-400',
        pink: 'bg-pink-500',

      },
      hoverColorMap: {
        emerald: 'hover:bg-emerald-400',
        green: 'hover:bg-green-400',
        sky: 'hover:bg-sky-300',
        amber: 'hover:bg-amber-300',
        red: 'hover:bg-red-400',
        purple: 'hover:bg-purple-400',
        orange: 'hover:bg-orange-400',
        violet: 'hover:bg-violet-300',
        cyan: 'hover:bg-cyan-300',
        slate: 'hover:bg-slate-300',
        teal: 'hover:bg-teal-300',
        pink: 'hover:bg-pink-400',
      },
    };
  },
  async mounted() {
    // console.log('Label', this.label, 'color', this.color);
    this.buttonColor = this.color ? this.color : 'sky';
    console.log(this.buttonColor);
    await this.delay(100);
    this.buttonReady = true;
  },
  methods: {
    clicked() {
      if (!this.loading) {
        console.log('CLICKED');
        this.$emit('button-clicked');
      } else {
        // console.log('TANGA LOADING');
      }
    },
    async delay(duration) {
      return new Promise((resolve) => {
        setTimeout(resolve, duration);
      });
    },
  },
};
</script>
