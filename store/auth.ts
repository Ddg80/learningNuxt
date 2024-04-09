import { defineStore } from 'pinia';

export interface IUserState {
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
    state: (): IUserState => ({
      isAuthenticated: false
    }),
    actions: {
      setIsAuthenticated (userIsConnected: boolean) {
        this.isAuthenticated = userIsConnected
      },
    },
    getters: {
      getIsAuthenticated: state => state.isAuthenticated
    },
  });