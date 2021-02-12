<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/containers/Home';
export default {
  name: 'App',
  components: {
    Home,
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
