<template>
  <div>
    <Button icon="location" type="icon" @clickevent="centerMap" />
    <l-map
      ref="myMap"
      :zoom="16"
      :center="mapCenter"
      style="height: 300px; width: 100%; margin-bottom: 30px; z-index: 1;"
      class="shadow-large"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
</template>

<script>
import Button from '../UI/Button';
export default {
  data() {
    return {
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      marker: [40.576584, 22.9607898],
      mapCenter: [40.576584, 22.9607898],
    };
  },
  methods: {
    centerMap() {
      this.$refs.myMap.fitBounds([this.marker]);
    },
  },
  components: {
    Button,
  },
};
</script>
