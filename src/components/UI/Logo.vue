<template>
  <div class="brandContainer">
    <img src="../../assets/MONOGRAM.svg" alt="" />
    <div>
      <span style="color: var(--mblue)">Athanasios Efthymiou</span>
      <span style="color: var(--lblue); font-weight: normal"
        >Insurance Group</span
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.brandContainer {
  display: flex !important;
}

.brandContainer img {
  height: 60px;
}

.brandContainer div {
  display: flex;
  flex-flow: column;
  text-align: left;
  font-weight: bold;
  align-self: center;
}
</style>
