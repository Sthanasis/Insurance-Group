<template>
  <div style="margin-top: 40px;">
    <Service
      v-for="service in services"
      :key="service.icon"
      :service="service"
    />
  </div>
</template>

<script>
import Service from '../UI/Service';
export default {
  computed: {
    services() {
      return [
        {
          icon: 'test1',
          description: this.$t('services.service1.description'),
          content: this.$t('services.service1.content'),
        },
        {
          icon: 'test2',
          description: this.$t('services.service2.description'),
          content: this.$t('services.service2.content'),
        },
        {
          icon: 'test3',
          description: this.$t('services.service3.description'),
          content: this.$t('services.service3.content'),
        },
        {
          icon: 'test4',
          description: this.$t('services.service4.description'),
          content: this.$t('services.service4.content'),
        },
        {
          icon: 'test5',
          description: this.$t('services.service5.description'),
          content: this.$t('services.service5.content'),
        },
        {
          icon: 'test6',
          description: this.$t('services.service6.description'),
          content: this.$t('services.service6.content'),
        },
      ];
    },
  },
  components: {
    Service,
  },
};
</script>

<style></style>
