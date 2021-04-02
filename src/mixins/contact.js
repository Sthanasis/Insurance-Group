export default {
  computed: {
    items() {
      return [
        {
          icon: 'phone',
          info: '2310 029126',
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
          info: 'a.efthymiou60@gmail.com',
        },
        {
          icon: 'facebook',
          info: 'Efthymiou Athanasios - Insurance Group',
        },
      ];
    },
  },
};
