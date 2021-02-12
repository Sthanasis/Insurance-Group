<template>
  <div class="burger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.burger {
  height: 20px;

  width: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.burger span {
  height: 4px;
  border-radius: 2px;
  width: 100%;
  background: black;
}

@media (min-width: 500px) {
  .burger {
    display: none;
  }
}
</style>
