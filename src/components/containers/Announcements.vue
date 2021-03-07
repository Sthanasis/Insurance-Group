<template>
  <div id="announcements" class="pageContainer">
    <div class="header">
      <span>
        {{ $t('navigation.navItem5') }}
      </span>
    </div>
    <div>
      <div v-for="a in announcements" :key="a" class="announcement">
        <li style="color: var(--lblue);margin-bottom: 20px">
          {{ $t(`announcements.${a}.date`) }}
        </li>
        <div>{{ $t(`announcements.${a}.content`) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    announcements() {
      return [1, 2].reverse(); //to add new announcement insert on lang json files and add a new number
    },
  },
};
</script>

<style>
.announcement {
  font-size: 1.3rem;
  width: 80%;
  margin-bottom: 74px;
}
</style>
