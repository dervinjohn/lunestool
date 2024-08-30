<!-- eslint-disable max-len -->
<template>
  <div class="flex flex-col footer bg-blue-950 w-1/5 sm:w-1/4 lg:w-1/5">
    <div class="flex flex-row w-full h-24 bg-blue-950 items-center">

      <img src="@/assets/img/avatar.jpeg" class="lg:w-14 lg:h-14 xl:w-20 xl:h-20 rounded-full ml-4" alt="" />

      <div class="flex flex-col w-2/3  justify-center h-full pl-4">
        <h3 class="text-white font-oswald text-lg">Ivan Marc Escamos</h3>
        <h4 class="text-white font-lato text-md font-light">Senior Software Engineer</h4>
      </div>
    </div>
    <div class="sidebar-divider w-full"></div>
    <SidebarTile icon="fa-solid fa-home" text="Home" />
    <SidebarTile icon="fa-solid fa-message" text="Chats" />
    <SidebarTile icon="fa-solid fa-briefcase" text="Projects" />
    <SidebarTile icon="fa-solid fa-users" text="Employee" />
    <SidebarTile icon="fa-solid fa-list-check" text="Task" />
  </div>
</template>
<script>
import SidebarTile from './SidebarTile.vue';

export default {
  name: 'SidebarComponent',
  components: {
    SidebarTile,
  },
};
</script>
<style>
.footer {
  height: calc(100vh - 6rem);
}

.sidebar-divider {
  height: 2px;
  border-bottom: 1px #1E3A8A solid;
  background-color: #0f172a;

}
</style>
