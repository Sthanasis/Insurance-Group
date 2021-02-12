<template>
  <div class="background">
    <div class="infoIcons">
      <InfoItem v-for="i in items" :key="i" :item="i" />
    </div>
    <div class="motivate">
      Together we create. <br />
      For what you love the most.
    </div>
  </div>
</template>

<script>
import InfoItem from '../UI/Infoitem';
export default {
  data() {
    return {
      items: ['phone', 'mobile', 'location', 'email', 'facebook'],
    };
  },
  components: {
    InfoItem,
  },
};
</script>

<style>
.bgImage {
  filter: brightness(0.5);
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 0;
}

.background {
  background-image: url(../../assets/HOME.svg);
  background-repeat: no-repeat;
  height: 100vh;
  margin-top: 74px;
  display: flex;
  flex-flow: column;
}

.motivate {
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-align: left;
  margin-top: 20%;
  margin-left: 15%;
}

.infoIcons {
  position: absolute;
  width: 100%;
  background-color: rgba(1, 177, 202, 0.4);
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 5px 0px;
}
</style>
