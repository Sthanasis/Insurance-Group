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
          Eng
        </span>
      </div>
      <div @click="setLanguage('gr')">
        <img :src="require(`@/assets/flags/gr.svg`)" alt="" />

        <span>Gr</span>
      </div>
      <div @click="setLanguage('it')">
        <img :src="require(`@/assets/flags/it.svg`)" alt="" />

        <span>It</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      language: localStorage.getItem('lang') || 'en',
    };
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
    setLanguage(lang) {
      this.$i18n.locale = lang;
      this.language = lang;
      localStorage.setItem('lang', lang);
    },
  },
};
</script>

<style>
.langModal {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  top: 50px;
  cursor: pointer;
}

.languageIndicator {
  margin-left: 10px;
  color: var(--lblue);
  font-weight: bold;
}

.langModal div {
  padding: 5px;
  display: flex;
}

.LanguageContainer {
  display: flex;
}

.LanguageContainer img {
  height: 25px;
  width: 40px;
}
</style>
