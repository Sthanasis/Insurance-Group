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
      console.log(this.selectedId);
    },
    returnHome() {
      window.scrollTo(0, 0);
      this.selectedId = 0;
      if (document.querySelector('.button.selected'))
        document.querySelector('.button.selected').classList.remove('selected');
      this.$emit('closeSidedrawer');
    },
  },
};
