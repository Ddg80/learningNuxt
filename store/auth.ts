import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
      isAuthenticated: false,
      firstConnect: false
    }),
    actions: {
      setIsAuthenticated (userIsConnected: boolean) {
        this.isAuthenticated = userIsConnected
        this.firstConnect = userIsConnected
        console.log(this.isAuthenticated);
      },
      setIsFirstConnect (firstCo: boolean) {
        this.firstConnect = firstCo
      }
    },
    getters: {
      getIsAuthenticated: state => state.isAuthenticated,
      getIsFirstConnect: state => state.firstConnect
    },
  });