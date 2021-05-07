export default {
  computed: {
    items() {
      return [
        {
          icon: 'phone',
          info: this.$t('other.phone'),
        },
        {
          icon: 'mobile',
          info: this.$t('other.cellphone'),
        },
        {
          icon: 'location',
          info: this.$t('other.location'),
        },
        {
          icon: 'linkedIn',
          info: 'Efthymiou Athanasios - Insurance Group',
        },
        {
          icon: 'email',
          info: 'a.efthimiou60@gmail.com',
        },
        {
          icon: 'facebook',
          info: 'Efthymiou Athanasios - Insurance Group',
        },
      ];
    },
  },
};
