<template>
  <div class="infoItem">
    <span :data-icon="item"></span>
    <span style="font-weight:bold;">{{ info }}</span>
  </div>
</template>

<script>
import { infoItems } from '../../common-js/common';
export default {
  props: {
    item: {
      type: String,
    },
  },
  computed: {
    info() {
      return infoItems[this.item];
    },
  },
};
</script>

<style scoped>
.infoItem span {
  color: white;
  opacity: 1;
  align-self: center;
}

@media (max-width: 992px) {
  /* .infoItem span {
    display: none;
  } */
}
</style>
