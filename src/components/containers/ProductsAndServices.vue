<template>
  <div id="ProductsAndServices" class="Services pageContainer">
    <div class="header">
      <span>
        {{ $t('navigation.navItem2') }}
      </span>
    </div>
    <Services />
  </div>
</template>

<script>
import Services from '../Utilities/Services';
export default {
  components: {
    Services,
  },
};
</script>

<style>
.Services {
  width: 80%;
}
</style>
