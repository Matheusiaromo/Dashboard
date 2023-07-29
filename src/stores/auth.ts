import { defineStore } from 'pinia'
import { api } from '@/services/api.js'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        logado: false,
        usuario: {
            id: "",
            nome: "",
            email: ""
        }
    }),
    actions: {
        logarUsuario(user) {
            return api.login({
                username: user.username,
                password: user.password
            }).then(response => {
                window.localStorage.token = `Bearer ${response.data.access_token}`
                this.setUsuario(response)
            })
        },
        setUsuario(data) {
            this.usuario.id = ""
            this.usuario.nome = "matheus"
            this.usuario.email = "matheus@gmail.com"
        }
    }
})