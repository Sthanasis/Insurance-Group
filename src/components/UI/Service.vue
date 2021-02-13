<template>
  <div class="service"></div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    content: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style>
.service {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
</style>
