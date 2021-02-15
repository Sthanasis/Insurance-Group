<template>
  <div id="app">
    <Home />
    <Company />
    <ProductsAndServices />
    <Collaborating />
    <Contact />
  </div>
</template>

<script>
import Home from './components/containers/Home';
import Company from './components/containers/Company';
import ProductsAndServices from './components/containers/ProductsAndServices';
import Collaborating from './components/containers/Collaborating';
import Contact from './components/containers/Contact';

export default {
  name: 'App',
  components: {
    Home,
    Company,
    ProductsAndServices,
    Contact,
    Collaborating,
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
