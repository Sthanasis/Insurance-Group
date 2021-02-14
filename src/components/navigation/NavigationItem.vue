<template>
  <div class="navigationItem">
    <Button
      :id="id"
      :caption="caption"
      :selected="id === selectedId"
      type="navItem"
      @clickevent="navigate"
    />
  </div>
</template>

<script>
import Button from '../UI/Button';
export default {
  props: {
    caption: {
      type: String,
    },
    selectedId: {
      type: Number,
    },
    isSelected: {
      type: Boolean,
    },
    id: {
      type: Number,
    },
  },
  components: {
    Button,
  },
  methods: {
    navigate(event) {
      this.$emit('navigate', event);
    },
  },
};
</script>

<style></style>
