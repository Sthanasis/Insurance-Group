export default {
  data() {
    return {
      selectedId: null,
    };
  },
  methods: {
    navigateToItem(event) {
      const hash = document.querySelector(event.target.dataset.target);
      hash.scrollIntoView();
      this.selectedId = parseInt(event.target.id);
      this.$emit('closeSidedrawer');
    },
  },
};
