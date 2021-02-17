<template>
  <div>
    <b-spinner variant="info" type="grow" v-if="disabled"></b-spinner>
    <button
      v-else
      :id="id"
      :class="[className, selected ? 'selected' : '']"
      :data-target="dataTarget"
      :disabled="disabled"
      @click="click($event)"
    >
      {{ caption }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
    },
    dataTarget: {
      type: String,
    },
    id: {
      type: Number,
    },
    type: {
      type: String,
    },
    selected: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  computed: {
    className() {
      let classname = '';
      if (this.type === 'navItem') {
        classname = 'navItem';
      }
      if (this.type === 'submit') {
        classname = 'submit';
      }
      return 'button ' + classname;
    },
  },
  methods: {
    click(event) {
      this.$emit('clickevent', event);
    },
  },
};
</script>

<style scoped>
.button {
  border: none;
  padding: 10px;
  font-weight: bold;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}

.navItem {
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--lblue);
  font-weight: bold;
}

.submit {
  background-color: var(--lblue);
  color: #fff;
}

.submit:active {
  box-shadow: 0 0 5px var(--lblue);
}

.selected {
  color: var(--mblue);
}

@media (max-width: 992px) {
  .selected {
    color: #fff;
  }
}
</style>
