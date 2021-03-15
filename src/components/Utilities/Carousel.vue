<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      fade
      background="var(--mblue)"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        :img-src="require('../../assets/StartHome.svg')"
        :text="$t('motivate.slide1')"
      ></b-carousel-slide>
      <b-carousel-slide :img-src="require('../../assets/HealthHome.svg')">
        <Caption
          img="healthWhite"
          :header="$t('motivate.hospital-title')"
          :footer="$t('motivate.hospital')"
        />
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../../assets/FamilyHome.svg')">
        <Caption
          img="family"
          :header="$t('motivate.family-title')"
          :footer="$t('motivate.family')"
        />
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../../assets/ResidenceHome.svg')">
        <Caption
          img="residenceWhite"
          :header="$t('motivate.home-title')"
          :footer="$t('motivate.home')"
        />
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../../assets/VehicleHome.svg')">
        <Caption
          img="vehicleWhite"
          :header="$t('motivate.vehicle-title')"
          :footer="$t('motivate.vehicle')"
        />
      </b-carousel-slide>
    </b-carousel>
    <!-- 
    <p class="mt-4">
      Slide #: {{ slide }}<br />
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
import Caption from '@/components/UI/Caption';

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  components: {
    Caption,
  },
};
</script>

<style>
.carousel-indicators li {
  background-color: var(--mblue) !important;
}

.carousel-caption {
  left: 8% !important;
  color: #067989 !important;
  text-align: start !important;
  font-weight: bold;
  font-size: 4vw;
  z-index: 1 !important;
  top: 20%;
  padding-top: 0 !important;
}

.carousel-caption p {
  white-space: pre-wrap;
  text-shadow: none;
  line-height: 0.5;
}
</style>
