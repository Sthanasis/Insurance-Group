<template>
  <nav>
    <div @click="returnHome" data-target="#home">
      <Logo />
    </div>
    <NavigationItems :navItems="navItems" />
    <Lang />
    <BurgerMenu @toggleSidedrawer="toggleSidedrawer" />
    <SideDrawer
      :navItems="navItems"
      :showSideDrawer="showSideDrawer"
      @closeSidedrawer="closeSidedrawer"
    />
  </nav>
</template>

<script>
import NavigationItems from './NavigationItems';
import Logo from '../UI/Logo';
import Lang from './Lang';
import BurgerMenu from './BurgerMenu';
import SideDrawer from './SideDrawer';
import navigation from '@/mixins/navigation';

export default {
  mixins: [navigation],
  data() {
    return {
      showSideDrawer: false,
    };
  },
  computed: {
    navItems() {
      return [
        {
          id: 1,
          caption: this.$t('navigation.navItem1'),
          isSelected: false,
          target: '#company',
        },
        {
          id: 2,
          caption: this.$t('navigation.navItem2'),
          isSelected: false,
          target: '#products',
        },
        {
          id: 3,
          caption: this.$t('navigation.navItem3'),
          isSelected: false,
          target: '#collaboratingCompanies',
        },
        {
          id: 4,
          caption: this.$t('navigation.navItem4'),
          isSelected: false,
          target: '#contact',
        },
      ];
    },
  },
  components: {
    NavigationItems,
    Logo,
    Lang,
    BurgerMenu,
    SideDrawer,
  },
  methods: {
    toggleSidedrawer() {
      this.showSideDrawer = !this.showSideDrawer;
    },
    closeSidedrawer() {
      this.showSideDrawer = false;
    },
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
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  height: 74px;
}

nav ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin-bottom: 0;
}

@media (max-width: 500px) {
  nav ul {
    display: none;
  }
}
</style>
