export default {
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
      this.language = lang;
      localStorage.setItem('lang', lang);
    },
  },
};
