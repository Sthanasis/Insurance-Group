<template>
  <div class="background">
    <img src="../../assets/HOME.svg" alt="" />
    <div class="infoIcons">
      <InfoItem v-for="i in items" :key="i" :item="i" />
    </div>
    <div class="motivate">
      Δημιουργούμε μαζί. <br />
      Για ότι αγαπάτε περισσότερο.
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
  /* background-image: url(../../assets/HOME.svg); */
  background-repeat: no-repeat;
  /* height: 100vh; */
  margin-top: 74px;
  display: flex;
  flex-flow: column;
}

.motivate {
  font-size: 4vw;
  color: white;
  font-weight: bold;
  text-align: left;
  margin-top: 15%;
  margin-left: 10%;
  position: absolute;
}

.infoIcons {
  position: absolute;
  width: 100%;
  background-color: rgba(1, 177, 202, 0.2);
  z-index: 2;
  display: flex;
  justify-content: space-around;
  padding: 5px 0px;
}
</style>
