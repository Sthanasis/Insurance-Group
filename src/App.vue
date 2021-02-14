<template>
  <div id="app">
    <Home />
    <Company />
    <ProductsAndServices />
  </div>
</template>

<script>
import Home from './components/containers/Home';
import Company from './components/containers/Company';
import ProductsAndServices from './components/containers/ProductsAndServices';

export default {
  name: 'App',
  components: {
    Home,
    Company,
    ProductsAndServices,
  },
};
</script>

<style>
@font-face {
  font-family: 'sansPro';
  src: url(./assets/fonts/SourceSansPro-Regular.ttf);
}
#app {
  font-family: 'sansPro', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
