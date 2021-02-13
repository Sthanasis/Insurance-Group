<template>
  <div id="app">
    <Home />
    <Company />
    <Services />
  </div>
</template>

<script>
import Home from './components/containers/Home';
import Company from './components/containers/Company';
import Services from './components/containers/Services';

export default {
  name: 'App',
  components: {
    Home,
    Company,
    Services,
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
