<template>
  <div class="burger" @click="toggleSideDrawer">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSideDrawer() {
      this.$emit('toggleSidedrawer');
    },
  },
};
</script>

<style scoped>
.burger {
  height: 20px;
  width: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
}
.burger span {
  height: 4px;
  border-radius: 2px;
  width: 100%;
  background: var(--mblue);
}

@media (min-width: 993px) {
  .burger {
    display: none;
  }
}
</style>
