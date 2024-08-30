<!-- eslint-disable max-len -->
<template>
  <div class="w-full">
    <div class="flex flex-row h-16 w-full p-6 text-lg items-center cursor-pointer hover:bg-blue-900">
      <font-awesome-icon class="text-white mr-8" :icon="icon" size="1x" />
      <h3 class="font-oswald font-normal text-white text-md">{{ text }}</h3>
    </div>
    <!-- <div class="sidebar-divider bg-slate-900 w-full"></div> -->
  </div>
</template>
<script>

export default {
  name: 'SidebarTile',
  props: {
    icon: String,
    text: String,
  },
};
</script>
