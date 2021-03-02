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

<script></script>

<style>
@font-face {
  font-family: 'Gilroy';
  src: url(../../assets/fonts/Gilroy-Light.otf);
}

@font-face {
  font-family: 'gilroy-bold';
  src: url(../../assets/fonts/Gilroy-ExtraBold.otf);
}

.brandContainer {
  display: flex !important;
  cursor: pointer;
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
  font-family: 'gilroy-bold';
}
.logoName span:last-of-type {
  font-weight: normal;
  color: var(--lblue);
  font-family: 'Gilroy';
}

@media (max-width: 992px) {
  .logoName {
    font-size: 17px;
    margin-left: 5px;
  }

  .sidedrawer .logo::before,
  .sidedrawer .logoName span {
    color: #fff !important;
  }
}

@media (max-width: 350px) {
  .logoName {
    font-size: 14px;
    margin-left: 5px;
  }
}
</style>
