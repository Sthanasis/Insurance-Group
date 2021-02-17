<template>
  <div class="brandContainer">
    <div>
      <div class="logo" data-icon="logo"></div>
    </div>
    <div class="logoName">
      <span>Athanasios Efthymiou</span>
      <span>Insurance Group</span>
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

.logo {
  padding-bottom: 10px;
}

.logo::before {
  font-size: 55px;
  margin: auto;
}

.logoName {
  display: flex;
  font-size: 20px;
  margin-left: 10px;
  flex-flow: column;
  text-align: left;
  font-weight: bold;
  align-self: center;
}

.logoName span {
  color: var(--mblue);
}
.logoName span:last-of-type {
  font-weight: normal;
  color: var(--lblue);
}

@media (max-width: 992px) {
  .brandContainer {
    padding: 0 15px;
  }

  .sidedrawer .logo::before,
  .sidedrawer .logoName span {
    color: #fff !important;
  }
}
</style>
