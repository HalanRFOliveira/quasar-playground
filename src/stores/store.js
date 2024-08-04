import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: false,
  }),
  getters: {
    isAuthenticated: (state) => state.auth,
  },
  actions: {
    login() {
      this.auth = true;
    },
    logout() {
      this.$reset();
    },
  },
  persist: true
});
