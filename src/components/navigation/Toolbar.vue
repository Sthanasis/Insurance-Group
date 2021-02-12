<template>
  <nav>
    <Logo />
    <NavigationItems :navItems="navItems" />
    <Lang />
  </nav>
</template>

<script>
import NavigationItems from './NavigationItems';
import Logo from '../UI/Logo';
import Lang from './Lang';
export default {
  data() {
    return {
      navItems: [
        {
          id: 1,
          caption: 'Our Company',
          isSelected: true,
        },
        {
          id: 2,
          caption: 'Products and Services',
          isSelected: false,
        },
        {
          id: 3,
          caption: 'Partners',
          isSelected: false,
        },
        {
          id: 4,
          caption: 'Contact',
          isSelected: false,
        },
      ],
    };
  },
  components: {
    NavigationItems,
    Logo,
    Lang,
  },
};
</script>

<style>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 5px gray;
  display: flex;
  justify-content: space-around;
  z-index: 3;
}

nav ul {
  display: flex;
  justify-content: center;
}
</style>
