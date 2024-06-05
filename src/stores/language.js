import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    activeLang: 1
  }),
  actions: {
    setActiveLang(index) {
      this.activeLang = index;
    }
  }
});
