<!-- eslint-disable max-len -->
<template>
  <div class="flex flex-row main-container">
    <Sidebar />
    <div class="flex flex-col lg:w-4/5 sm:w-3/4 h-full overflow-auto p-8">
      <!-- <h1 class="font-oswald text-3xl text-white mb-4">Component Library</h1> -->

      <HeaderText class="mb-12" size="text-4xl">Component Library</HeaderText>

      <HeaderText class="mb-8" size="text-3xl">Header Text</HeaderText>

      <div class="flex flex-row w-full mb-12">
        <div class="flex flex-col w-1/2">
          <HeaderText class="mb-6" size="text-md">text-md</HeaderText>
          <HeaderText class="mb-6" size="text-lg">text-lg</HeaderText>
          <HeaderText class="mb-6" size="text-xl">text-xl</HeaderText>
          <HeaderText class="mb-6" size="text-2xl">text-2xl</HeaderText>
          <HeaderText class="mb-6" size="text-3xl">text-3xl</HeaderText>
          <HeaderText class="mb-6" size="text-4xl">text-4xl</HeaderText>
        </div>
        <div class="flex flex-col w-1/2">
          <HeaderText class="mb-6" size="text-3xl" color="cyan">cyan (default)</HeaderText>
          <HeaderText class="mb-6" size="text-3xl" color="violet">violet</HeaderText>
          <HeaderText class="mb-6" size="text-3xl" color="slate">slate</HeaderText>
          <HeaderText class="mb-6" size="text-3xl" color="teal">teal</HeaderText>
          <HeaderText class="mb-6" size="text-3xl" color="pink">pink</HeaderText>
        </div>
      </div>

      <HeaderText class="mb-8" size="text-3xl">Form Inputs</HeaderText>

      <HeaderText class="mb-8" size="text-2xl">Text Fields</HeaderText>

      <TextField class="mt-2" v-model="email" type="text" label="Email" />
      <TextField class="mt-2" v-model="password" type="password" label="Password" />
      <TextField class="mt-2" v-model="errorDemo" type="text" label="Error Demo" :error="error" />
      <TextField class="mt-2" v-model="readOnlyDemo" type="text" label="Read Only" read-only />

      <p class="text-white">{{ email }}</p>
      <HeaderText class="mb-8 mt-8" size="text-2xl">Select Fields</HeaderText>
      <SelectComponent v-model="selectedItem" :items="items" label="Basic Select Field" />
      <SelectComponent v-model="selectedObj" :items="itemsObj" label="Object Select Field" return-object
        item-text="name" />
      <p class="font-lato text-md text-white">{{ selectedObj }}</p>

      <HeaderText class="mb-8 mt-8" size="text-2xl">Buttons</HeaderText>
      <IconButton class="my-4" label="Click me!" color="violet" icon="fa-solid fa-circle-exclamation" block
        v-on:button-clicked="buttonClicked" />
      <IconButton class="my-4" label="Loading..." color="violet" icon="fa-solid fa-right-to-bracket" block
        :loading="loading" />
      <div class="flex flex-row">
        <div class="w-1/4 pr-2">
          <IconButton class="my-4" label="Cyan" color="cyan" icon="fa-solid fa-circle-exclamation" block />
        </div>
        <div class="w-1/4 pl-2 pr-2">
          <IconButton class="my-4" label="Slate" color="slate" icon="fa-solid fa-circle-exclamation" block />
        </div>
        <div class="w-1/4 pl-2 pr-2">
          <IconButton class="my-4" label="Teal" color="teal" icon="fa-solid fa-circle-exclamation" block />
        </div>
        <div class="w-1/4 pl-2">
          <IconButton class="my-4" label="Pink" color="pink" icon="fa-solid fa-circle-exclamation" block />
        </div>
      </div>

      <HeaderText class="my-8" size="text-3xl">Dialogs</HeaderText>
      <div class="flex flex-row">
        <div class="w-1/2 pr-2">
          <IconButton class="my-4" label="Success Dialog" color="teal" icon="fa-regular fa-circle-check" block
            v-on:button-clicked="showSuccessDialog = true" />
        </div>
        <div class="w-1/2 pr-2">
          <IconButton class="my-4" label="Confirm Dialog" color="violet" icon="fa-regular fa-circle-question" block
            v-on:button-clicked="showConfirmDialog = true" />
        </div>
      </div>
      <SuccessDialog v-if="showSuccessDialog" v-on:k="dismissSuccessDialog">Success!</SuccessDialog>
      <ConfirmDialog v-if="showConfirmDialog" v-on:yes="doAction" v-on:no="showConfirmDialog = false">
        Are you sure you want to do this action?
      </ConfirmDialog>
    </div>
  </div>
</template>
<script>
import TextField from '../components/TextField.vue';
import Sidebar from '../components/Sidebar.vue';
import HeaderText from '../components/HeaderText.vue';
import SelectComponent from '../components/Select.vue';
import IconButton from '../components/IconButton.vue';
import SuccessDialog from '../components/SuccessDialog.vue';
import ConfirmDialog from '../components/ConfirmDialog.vue';

export default {
  name: 'ComponentsView',
  components: {
    Sidebar,
    HeaderText,
    TextField,
    SelectComponent,
    IconButton,
    SuccessDialog,
    ConfirmDialog,
  },
  data() {
    return {
      email: null,
      password: null,
      errorDemo: null,
      error: true,
      readOnlyDemo: 'This field is read only.',
      items: ['Item 1', 'Item 2', 'Item 3'],
      selectedItem: 'Item 1',
      itemsObj: [
        {
          name: 'Ivan Escamos',
          position: 'Senior Software Engineer',
          age: '23',
        },
        {
          name: 'DJ Valencia',
          position: 'Fullstack Developer',
          age: '27',
        },
        {
          name: 'Ryn Gapud',
          position: 'Business Analyst',
          age: '28',
        },
        {
          name: 'Axel Melendres',
          position: 'Strategic Officer',
          age: '33',
        },
      ],
      selectedObj: {
        name: 'Ivan Escamos',
        position: 'Senior Software Engineer',
        age: '23',
      },
      loading: true,
      showSuccessDialog: false,
      showConfirmDialog: false,
    };
  },
  methods: {
    buttonClicked() {
      alert('I was clicked.');
    },
    dismissSuccessDialog() {
      this.showSuccessDialog = false;
    },
    doAction() {
      console.log('Action done.');
      this.showConfirmDialog = false;
    },
  },
};
</script>
