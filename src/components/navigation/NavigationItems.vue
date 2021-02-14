<template>
  <ul>
    <BurgerMenu />
    <NavigationItem
      v-for="navItem in navItems"
      :key="navItem.id"
      :caption="navItem.caption"
      :isSelected="navItem.isSelected"
      :id="navItem.id"
      :selectedId="selectedId"
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
      selectedId: null,
    };
  },
  props: {
    navItems: {
      type: Array,
    },
  },
  components: {
    NavigationItem,
    BurgerMenu,
  },
  methods: {
    navigateToItem(event) {
      this.selectedId = parseInt(event.target.id);
    },
  },
};
</script>

<style></style>
