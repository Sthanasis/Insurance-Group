<template>
  <ul>
    <BurgerMenu />
    <NavigationItem
      v-for="navItem in navigationItems"
      :key="navItem.id"
      :caption="navItem.caption"
      :isSelected="navItem.isSelected"
      :id="navItem.id"
      @navigate="navigateToItem"
    />
  </ul>
</template>

<script>
import BurgerMenu from '../navigation/BurgerMenu.vue';
import NavigationItem from './NavigationItem';
export default {
  data() {
    return {
      navigationItems: [...this.navItems]
    };
  },
  props: {
    navItems: {
      type: Array
    }
  },
  components: {
    NavigationItem,
    BurgerMenu
  },
  methods: {
    navigateToItem() {
      this.navigationItems = this.navigationItems.map(item => {
        return { ...item, isSelected: item.id == event.target.id };
      });
    }
  }
};
</script>

<style></style>
