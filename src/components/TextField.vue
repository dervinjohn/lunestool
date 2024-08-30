<template>
  <!-- eslint-disable max-len -->
  <label class="block text-md font-lato mb-2 w-full text-left font-regular"
    :class="error ? 'text-pink-500' : 'text-white'" :for="label">
    {{ label }}
    <!-- <input
      class="bg-transparent mt-2 shadow-sm border rounded-lg w-full py-2 px-3 text-white font-rubik font-light text-sm focus:outline-blue-400 "
      :class="error ? 'border-red-600 focus:outline-red-600 ' : 'border-slate-500'" :id="label" :type="type"
      :value="modelValue" @input="updateValue" /> -->

    <input :id="label" :type="type" :value="value" @input="updateValue" class="font-lato font-light"
      :class="error ? 'text-pink-500 error' : ''" :readonly="readOnly" />
  </label>

  <!-- eslint-disable max-len -->
</template>
<script>
export default {
  name: 'TextField',
  // props: ['label', 'modelValue', 'type', 'error'],
  props: {
    label: String,
    value: [String, Number],
    type: String,
    error: Boolean,
    readOnly: Boolean,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
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

input {
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

input:focus {
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
