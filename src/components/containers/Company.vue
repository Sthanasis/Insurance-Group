<template>
  <div id="company" class="Company pageContainer">
    <div class="colors">
      <div style="background-color: var(--lblue)"></div>
      <div style="background-color: var(--yellow)"></div>
      <div style="background-color: var(--pink)"></div>
      <div style="background-color: var(--mustard)"></div>
      <div style="background-color: var(--lgreen)"></div>
    </div>
    <div class="header">
      <span>
        {{ $t('navigation.navItem1') }}
      </span>
    </div>
    <h3 style="margin: 40px 0">
      {{ $t('company.about') }}
    </h3>
    <div>
      <h3>{{ $t('company.header') }}</h3>
      <ul>
        <li>{{ $t('company.item1') }}</li>
        <li>
          {{ $t('company.item2.row1') }}
          <br />
          {{ $t('company.item2.row2') }}
          <br />
          {{ $t('company.item2.row3') }}
        </li>
        <li>
          {{ $t('company.item3.row1') }}
          <br />
          {{ $t('company.item3.row2') }}
          <br />
          {{ $t('company.item3.row3') }}
        </li>
        <li>
          {{ $t('company.item4') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.colors {
  position: absolute;
  left: 0;
}

.colors div {
  width: 10px;
  height: 60px;
}

.Company ul {
  font-size: 1.4rem;
  color: var(--lblue);
  padding-left: 20px;
}

.Company ul li {
  margin: 20px 0;
  font-weight: bold;
}

.Company ul li:last-of-type {
  margin-bottom: 74px;
}

@media (max-width: 992px) {
  .Company ul {
    font-size: 1rem;
  }
}
</style>
