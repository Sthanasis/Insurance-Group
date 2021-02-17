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
      :target="navItem.target"
      @navigate="navigateToItem"
    />
  </ul>
</template>

<script>
import BurgerMenu from '../navigation/BurgerMenu.vue';
import NavigationItem from './NavigationItem';
import navigation from '@/mixins/navigation';

export default {
  mixins: [navigation],
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
      const hash = document.querySelector(event.target.dataset.target);

      hash.scrollIntoView();
      this.selectedId = parseInt(event.target.id);
    },
  },
};
</script>

<style></style>
