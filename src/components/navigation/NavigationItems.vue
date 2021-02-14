<template>
  <ul>
    <BurgerMenu />
    <router-link class="navigationItem" :to="link1" active-class="active" exact
      ><a>
        {{ $t('navigation.navItem1') }}
      </a></router-link
    >
    <router-link class="navigationItem" :to="link2" active-class="active" exact
      ><a>
        {{ $t('navigation.navItem2') }}
      </a></router-link
    >
    <router-link class="navigationItem" :to="link3" active-class="active" exact
      ><a>
        {{ $t('navigation.navItem3') }}
      </a></router-link
    >
    <router-link class="navigationItem" :to="link4" active-class="active" exact
      ><a>
        {{ $t('navigation.navItem4') }}
      </a></router-link
    >
  </ul>
</template>

<script>
import BurgerMenu from '../navigation/BurgerMenu.vue';
export default {
  data() {
    return {
      selectedId: null,
      link1: { name: 'Company', hash: '#company' },
      link2: { name: 'ProductsAndServices', hash: '#ProductsAndServices' },
      link3: { name: 'Collaborating', hash: '#collaboratingCompanies' },
      link4: { name: 'Contact', hash: '#contact' },
    };
  },
  props: {
    navItems: {
      type: Array,
    },
  },
  components: {
    BurgerMenu,
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
