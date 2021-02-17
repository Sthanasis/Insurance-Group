<template>
  <div class="navigationItem">
    <Button
      :id="id"
      :caption="caption"
      :selected="id === selectedId"
      :dataTarget="target"
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
    target: {
      type: String,
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

<style>
.navigationItem {
  border-right: 1px solid var(--lblue);
}

.navigationItem:last-of-type {
  border: none;
}

@media (max-width: 992px) {
  .navigationItem {
    border-right: none;
    margin: 20px 0;
  }
}
</style>
