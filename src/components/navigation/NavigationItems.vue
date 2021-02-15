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
import NavigationItem from '../navigation/NavigationItem';
import BurgerMenu from '../navigation/BurgerMenu.vue';
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
    BurgerMenu,
    NavigationItem,
  },
  methods: {
    navigateToItem(event) {
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
