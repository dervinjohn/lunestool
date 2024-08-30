<template>
  <div class="flex flex-row items-center">
    <div class="w-1 mr-2" :class="[accentLineSizeMap[sizeVal], accentLineColorMap[colorVal]]"></div>
    <h3 class="font-oswald text-white text-left" :class="sizeVal">
      <slot></slot>
    </h3>
  </div>
</template>
<script>
export default {
  name: 'HeaderText',
  props: {
    size: String,
    color: String,
  },
  data() {
    return {
      sizeVal: null,
      colorVal: null,
      accentLineSizeMap: {
        'text-md': 'h-4',
        'text-lg': 'h-6',
        'text-xl': 'h-8',
        'text-2xl': 'h-8',
        'text-3xl': 'h-10',
        'text-4xl': 'h-10',
      },
      accentLineColorMap: {
        cyan: 'bg-cyan-400',
        violet: 'bg-violet-400',
        slate: 'bg-slate-400',
        teal: 'bg-teal-400',
        pink: 'bg-pink-500',

      },
    };
  },
  mounted() {
    this.sizeVal = this.size ?? 'text-md';
    this.colorVal = this.color ?? 'cyan';
  },
};
</script>
