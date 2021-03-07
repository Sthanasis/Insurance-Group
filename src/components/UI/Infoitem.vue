<template>
  <div class="infoItem">
    <span :data-icon="item.icon"></span>
    <span style="font-weight:bold;">{{ info }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    info() {
      return this.item.info;
    },
  },
};
</script>

<style scoped>
.infoItem {
  display: flex;
}

.infoItem span::before,
.infoItem span {
  color: white;
  opacity: 1;
  align-self: center;
}
</style>
