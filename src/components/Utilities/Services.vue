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
          icon: 'health',
          description: this.$t('services.service1.description'),
          content: [
            this.$t('services.service1.content.dot1'),
            this.$t('services.service1.content.dot2'),
            this.$t('services.service1.content.dot3'),
          ],
        },
        {
          icon: 'finance',
          description: this.$t('services.service2.description'),
          content: [
            this.$t('services.service2.content.dot1'),
            this.$t('services.service2.content.dot2'),
            this.$t('services.service2.content.dot3'),
          ],
        },
        {
          icon: 'income',
          description: this.$t('services.service3.description'),
          content: [
            this.$t('services.service3.content.dot1'),
            this.$t('services.service3.content.dot2'),
            this.$t('services.service3.content.dot3'),
          ],
        },
        {
          icon: 'residence',
          description: this.$t('services.service4.description'),
          content: [
            this.$t('services.service4.content.dot1'),
            this.$t('services.service4.content.dot2'),
            this.$t('services.service4.content.dot3'),
            this.$t('services.service4.content.dot4'),
          ],
        },
        {
          icon: 'company',
          description: this.$t('services.service5.description'),
          content: [
            this.$t('services.service5.content.dot1'),
            this.$t('services.service5.content.dot2'),
            this.$t('services.service5.content.dot3'),
            this.$t('services.service5.content.dot4'),
            this.$t('services.service5.content.dot5'),
            this.$t('services.service5.content.dot6'),
            this.$t('services.service5.content.dot7'),
          ],
        },
        {
          icon: 'civil',
          description: this.$t('services.service6.description'),
          content: [
            this.$t('services.service6.content.dot1'),
            this.$t('services.service6.content.dot2'),
          ],
        },
        {
          icon: 'vehicle',
          description: this.$t('services.service7.description'),
          content: [this.$t('services.service7.content.dot1')],
        },
        {
          icon: 'boat',
          description: this.$t('services.service8.description'),
          content: [this.$t('services.service8.content.dot1')],
        },
        {
          icon: 'rest',
          description: this.$t('services.service9.description'),
          content: [
            this.$t('services.service9.content.dot1'),
            this.$t('services.service9.content.dot2'),
            this.$t('services.service9.content.dot3'),
          ],
        },
        {
          icon: 'legal_arag',
          description: this.$t('services.service10.description'),
          content: [
            this.$t('services.service10.content.dot1'),
            this.$t('services.service10.content.dot2'),
            this.$t('services.service10.content.dot3'),
            this.$t('services.service10.content.dot4'),
            this.$t('services.service10.content.dot5'),
            this.$t('services.service10.content.dot6'),
            this.$t('services.service10.content.dot7'),
          ],
        },
        {
          icon: 'energy',
          description: this.$t('services.service11.description'),
          content: [
            this.$t('services.service11.content.dot1'),
            this.$t('services.service11.content.dot2'),
            this.$t('services.service11.content.dot3'),
          ],
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
