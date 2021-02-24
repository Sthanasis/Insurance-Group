<template>
  <div class="service">
    <div class="serviceHeader">
      <img :src="require(`@/assets/services/${service.icon}.svg`)" />
      <span>{{ service.description }}</span>
      <span data-icon="down" @click="toggleContent"></span>
    </div>
    <div v-if="show" class="serviceContent">
      <ul>
        <li v-for="item in service.content" :key="item">{{ item }}</li>
      </ul>
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
  width: 60%;

  padding: 20px 0;
}

.service:last-of-type {
  border-bottom: none;
}

.serviceHeader {
  display: flex;
  align-items: center;
}

.serviceHeader span:first-of-type {
  color: var(--mblue);
  font-weight: bold;
  font-size: 1.5rem;
}

.serviceHeader span:last-of-type {
  margin-left: auto;
}

.serviceHeader span:last-of-type::before {
  color: var(--mblue);
  cursor: pointer;
}

.service img {
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.service ul {
  margin-top: 1rem;
  width: 95%;
  margin: auto;
}

.service ul li {
  margin: 20px 0;
  color: var(--mblue);
  font-size: 1.1rem;
}

.service ul li::marker {
  color: var(--lblue);
}

@media (max-width: 992px) {
  .service {
    width: 100%;
  }

  .serviceHeader span:first-of-type {
    font-size: 1rem;
    font-weight: bold;
  }

  .service ul {
    margin: 0;
  }

  .service ul li {
    font-size: 1rem;
  }
}
</style>
