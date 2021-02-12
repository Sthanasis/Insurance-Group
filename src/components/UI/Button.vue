<template>
  <button
    :id="id"
    :class="[className, selected ? 'selected' : '']"
    @click="click($event)"
  >
    {{ caption }}
  </button>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
    },
    id: {
      type: Number,
    },
    type: {
      type: String,
    },
    selected: {
      type: Boolean,
    },
  },
  computed: {
    className() {
      let classname = '';
      if (this.type === 'navItem') {
        classname = 'navItem';
      }
      return 'btn ' + classname;
    },
  },
  methods: {
    click(event) {
      this.$emit('clickevent', event);
    },
  },
};
</script>

<style scoped>
.navItem {
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
.selected {
  color: var(--lblue);
}
</style>
