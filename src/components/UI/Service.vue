<template>
  <div class="service">
    <div class="serviceHeader">
      <span :data-icon="service.icon"></span>
      <span>{{ service.description }}</span>
      <span data-icon="down" @click="toggleContent"></span>
    </div>
    <div v-if="show" class="serviceContent">
      <span>{{ service.content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    service: {
      type: Object,
    },
  },
  methods: {
    toggleContent() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.service {
  border-bottom: 1px solid lightgray;
  width: 30%;
  font-size: 18px;
  padding: 20px 0;
}

.service:last-of-type {
  border-bottom: none;
}

.serviceHeader {
  display: flex;
}

.serviceHeader span:nth-of-type(2) {
  color: var(--mblue);
  font-weight: bold;
}

.serviceHeader span:last-of-type {
  margin-left: auto;
}

.serviceHeader span:last-of-type::before {
  color: var(--mblue);
  cursor: pointer;
}
</style>
