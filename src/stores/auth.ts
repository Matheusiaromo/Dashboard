import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({ 
        token: '', 
        user: [] 
    }),
    getters: {
        isAuthenticated: (state) => !!state.token
    },
    actions: {
         login(token: string, user: any) {
            this.token = token
            this.user = user
        }
    }
})