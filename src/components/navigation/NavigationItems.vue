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
    BurgerMenu,
    NavigationItem,
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

<style>
.navigationItem {
  border-right: 1px solid var(--lblue);
  padding: 10px;
  text-decoration: none;
  color: var(--lblue) !important;
  font-weight: bold;
}

.active {
  color: var(--mblue) !important;
}

.navigationItem:visited {
  color: initial;
}

.navigationItem:last-of-type {
  border: none;
}
</style>
