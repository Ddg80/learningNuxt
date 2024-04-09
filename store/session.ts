import { defineStore } from 'pinia';

export interface ISessionState {
  firstConnect: boolean
}

export const useSessionStore = defineStore('session', {
    state: (): ISessionState => ({
      firstConnect: false
    }),
    actions: {
      setIsFirstConnect (firstCo: boolean) {
        this.firstConnect = firstCo
      }
    },
    getters: {
      getIsFirstConnect: state => state.firstConnect
    },
  });