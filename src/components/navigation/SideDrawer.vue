<template>
  <transition name="slide">
    <div class="sidedrawer" v-if="showSideDrawer">
      <div
        style="display:flex; justify-content:space-between;align-items:center;"
      >
        <div @click="returnHome" data-target="#home">
          <Logo />
        </div>
        <Button
          type="icon"
          icon="menu-arrow"
          @clickevent="$emit('closeSidedrawer')"
        />
      </div>

      <div style="padding:0 15px;">
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
      <Lang :language="language" v-on="$listeners" />
    </div>
  </transition>
</template>

<script>
import NavigationItem from './NavigationItem';
import navigation from '@/mixins/navigation';
import Button from '../UI/Button';
import Lang from './Lang';
import Logo from '../UI/Logo';

export default {
  mixins: [navigation],
  components: {
    NavigationItem,
    Logo,
    Lang,
    Button,
  },
  props: {
    navItems: {
      type: Array,
    },
    showSideDrawer: {
      type: Boolean,
    },
    language: {
      type: String,
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
  left: 0;
}

.sidedrawer .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

@media (max-width: 350px) {
  .sidedrawer .LanguageContainer {
    padding: 0 20px;
  }
}
</style>
