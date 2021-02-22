<template>
  <transition name="slide">
    <div class="sidedrawer" v-if="showSideDrawer">
      <div @click="returnHome" data-target="#home">
        <Logo />
      </div>
      <div style="padding: 15px;">
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
      </div>
      <Lang />
    </div>
  </transition>
</template>

<script>
import NavigationItem from './NavigationItem';
import navigation from '@/mixins/navigation';
import Lang from './Lang';
import Logo from '../UI/Logo';

export default {
  mixins: [navigation],
  components: {
    NavigationItem,
    Logo,
    Lang,
  },
  props: {
    navItems: {
      type: Array,
    },
    showSideDrawer: {
      type: Boolean,
    },
  },
};
</script>

<style>
.sidedrawer {
  width: 100vw;
  height: 100vh;
  background-color: var(--mblue);
  position: absolute;
  padding: 20px;
  text-align: left;
  top: 0;
}

.sidedrawer .LanguageContainer {
  display: block;
  padding: 20px;
}

.slide-enter {
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
}

@keyframes slide-in {
  from {
    left: -100vw;
  }
  to {
    left: 0;
  }
}

@keyframes slide-out {
  from {
    left: 0;
  }
  to {
    left: -100vw;
  }
}

@media (min-width: 993px) {
  .sidedrawer {
    display: none;
  }
}
</style>
