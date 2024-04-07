import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
    state: () => ({
      isAuthenticated: false
    }),
    actions: {
      setIsAuthenticated (userIsConnected: boolean) {
        this.isAuthenticated = userIsConnected
        console.log(this.isAuthenticated);
      }
    },
    getters: {
      getIsAuthenticated: state => state.isAuthenticated,
    },
  });