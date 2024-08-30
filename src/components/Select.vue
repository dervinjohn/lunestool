<!-- eslint-disable max-len -->

<template>
  <div class="w-full relative flex mb-2">
    <font-awesome-icon icon="fa-solid fa-caret-down" size="sm" class="absolute
        text-white right-4 top-10" />
    <label class="block text-md font-lato
        w-full"
      :class="`${error ? 'text-pink-500' : 'text-white'}
                                                                                                                                                                ${smallLabel ? 'text-sm' : 'text-md'}`"
      :for="label">
      {{ label }}
      <div class="w-full">
        <select class="form-select form-select-lg
        appearance-none
        block
        w-full
        pl-3
        py-2
        text-sm
        font-light
        bg-clip-padding bg-no-repeat
        border border-solid
        rounded-lg
        transition
        ease-in-out
        mt-2
        font-lato" aria-label=".form-select-lg example" @change="updateValue" :disabled="disabled">
          <option v-for="item, index in items" :value="index" :key="returnObject ?
            returnObject[itemText] : item" :selected="equal(value, item)">
            {{ returnObject ? item[itemText] : item }}
          </option>
        </select>

      </div>
    </label>
  </div>
</template>
<script>
import { isEqual } from 'underscore';

export default {
  name: 'SelectComponent',
  props: {
    returnObject: Boolean,
    items: Array,
    itemText: String,
    value: [String, Object],
    label: String,
    smallLabel: Boolean,
    multilineLabel: Boolean,
    noLabel: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      error: false,
      selectedIndex: 0,
    };
  },
  mounted() {
    // console.log(this.value);
    // const itemIndex = this.items.findIndex(this.value);
    // this.selectedIndex = itemIndex || 0;
  },
  methods: {
    updateValue(event) {
      console.log(this.returnObject);
      console.log(event.target.value);
      this.$emit('input', this.items[event.target.value]);
    },
    equal(a, b) {
      return isEqual(a, b);
    },
  },
};
</script>
<style scoped>
/* input {
  outline: none;
}

input:focus {
  outline: white;
} */

select {
  width: 100%;
  padding: 8px 8px;
  margin: 4px 0;
  box-sizing: border-box;
  border: 1px solid #94a3b8;
  -webkit-transition: 0.3s;
  transition: 0.5s;
  outline: none;
  background: transparent;
  border-radius: 8px;
  color: white;

}

select:focus {
  border: 1px solid #22D3EE;
  background: transparent;
  color: white;

}

.error {
  border: 1px solid #ec4899;
  background: transparent;
  color: white;

}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s;
  background-color: transparent;
  color: white;
  -webkit-text-fill-color: #fff !important;
}
</style>
