<template>
  <div class="Input">
    <input
      v-if="element === 'input'"
      :type="inputType"
      :placeholder="placeholder"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="element === 'textarea'"
      name=""
      id=""
      cols="57"
      rows="10"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    inputType: {
      type: String,
    },
    element: {
      type: String,
    },
  },
};
</script>

<style scoped>
.Input input {
  line-height: 2;
  border: none;
  color: var(--mblue);
  font-weight: bold;
  background-color: lightcyan;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  margin-right: 10px;
}
.Input textarea {
  border: none;
  color: var(--mblue);
  font-weight: bold;
  background-color: lightcyan;
  padding: 5px;
  width: 100%;
  height: 200px !important;
  border-radius: 10px;
}
textarea:focus,
input:focus {
  outline: none;
}
</style>
