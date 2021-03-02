<template>
  <div class="LanguageContainer">
    <div
      @click="toggleModal"
      style="margin:auto; display: flex; cursor: pointer;"
    >
      <img :src="require(`@/assets/flags/${language}.svg`)" alt="" />
      <span class="languageIndicator">{{ $t('navigation.language') }}</span>
      <span data-icon="down"></span>
    </div>
    <div v-if="show" class="langModal">
      <div @click="setLanguage('en')">
        <img :src="require(`@/assets/flags/en.svg`)" alt="" />
        <span>
          {{ $t('language.english') }}
        </span>
      </div>
      <div @click="setLanguage('gr')">
        <img :src="require(`@/assets/flags/gr.svg`)" alt="" />

        <span>{{ $t('language.greek') }}</span>
      </div>
      <div @click="setLanguage('it')">
        <img :src="require(`@/assets/flags/it.svg`)" alt="" />

        <span>{{ $t('language.italian') }}</span>
      </div>
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
    language: {
      type: String,
    },
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
    setLanguage(lang) {
      this.$emit('setLanguage', lang);
      this.show = !this.show;
    },
  },
};
</script>

<style>
.langModal {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 5px rgb(0 0 0 / 10%);
  top: 55px;
  width: 120px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

.languageIndicator {
  margin-left: 10px;
  color: var(--lblue);
  font-weight: bold;
}

.langModal div {
  padding: 5px;
  display: flex;
  align-items: center;
}

.LanguageContainer {
  display: flex;
}

.LanguageContainer img {
  height: 20px;
  width: 30px;
}

.langModal img {
  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.langModal span {
  margin-left: 10px;
}

[data-icon='down']:before {
  font-size: 15px;
  margin: 0;
  color: var(--lblue);
}

@media (max-width: 992px) {
  .LanguageContainer {
    display: none;
  }

  .langModal {
    top: initial;
  }
}
</style>
