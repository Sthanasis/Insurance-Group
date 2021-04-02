<template>
  <div class="background">
    <!-- <img src="../../assets/HOME.svg" alt="" /> -->
    <Carousel />
    <div class="infoIcons">
      <InfoItem v-for="i in items" :key="i.icon" :item="i" />
    </div>
    <!-- <div class="motivate">
      {{ $t('motivate.row1') }} <br />
      {{ $t('motivate.row2') }}
    </div> -->
  </div>
</template>

<script>
import InfoItem from '../UI/Infoitem';
import items from '../../mixins/contact';
import Carousel from './Carousel';
export default {
  mixins: [items],
  components: {
    InfoItem,
    Carousel,
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
  background-color: #067989;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 5px 5%;
}

.infoIcons .infoItem span:last-child {
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .infoIcons {
    display: none;
  }

  .motivate {
    font-size: 1.2rem;
    margin-top: 15%;
  }
}
</style>
