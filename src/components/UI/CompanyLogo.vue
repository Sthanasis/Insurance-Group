<template>
  <img :src="require(`@/assets/companies/${company}.svg`)" alt="" />
</template>

<script>
export default {
  props: {
    company: String,
  },
};
</script>

<style scoped>
img {
  height: 100px;
  margin: 10px 10px 10px 0;
  width: 140px;
}
</style>
