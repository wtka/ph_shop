import { defineStore } from 'pinia';

export default defineStore('Nav Active', {
  state: () => ({
    activeMap: new Map([
      ['home', true],
      ['shop', false],
      ['blog', false],
      ['about', false],
      ['contact', false],
      ['cart', false],
    ]),
  }),
  getters: {
    getActivePage: (state) => (page: string) => state.activeMap.get(page),
  },
  actions: {
    upadteActiveMap(page: string) {
      this.activeMap.forEach((value, key) => {
        if (key === page) {
          this.activeMap.set(key, true);
        } else {
          this.activeMap.set(key, false);
        }
      });
    },
  },
});
