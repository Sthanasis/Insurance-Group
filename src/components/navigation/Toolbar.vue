<template>
  <nav>
    <Logo />
    <NavigationItems :navItems="navItems" />
    <Lang />
    <BurgerMenu />
  </nav>
</template>

<script>
import NavigationItems from './NavigationItems';
import Logo from '../UI/Logo';
import Lang from './Lang';
import BurgerMenu from './BurgerMenu';

export default {
  data() {
    return {
      navItems: [
        {
          id: 1,
          caption: this.$t('navigation.navItem1'),
          isSelected: false,
        },
        {
          id: 2,
          caption: this.$t('navigation.navItem2'),
          isSelected: false,
        },
        {
          id: 3,
          caption: this.$t('navigation.navItem3'),
          isSelected: false,
        },
        {
          id: 4,
          caption: this.$t('navigation.navItem4'),
          isSelected: false,
        },
      ],
    };
  },
  components: {
    NavigationItems,
    Logo,
    Lang,
    BurgerMenu,
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
  height: 74px;
}

nav ul {
  display: flex;
  justify-content: center;
  padding: 0;
}

@media (max-width: 500px) {
  nav ul {
    display: none;
  }
}
</style>
