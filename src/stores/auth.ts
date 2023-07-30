import { defineStore } from 'pinia'
import { api } from '@/services/api.js'
import router from '@/router';

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
                window.localStorage.token = `Bearer ${response.data.token}`
                this.setUsuario(response.data)
                this.logado = true
            })
        },
        setUsuario(data) {
            this.usuario.id = ""
            this.usuario.nome = data.user_display_name
            this.usuario.email = data.user_email
        },
        deslogarUsuario() {
            this.logado = false,
                window.localStorage.removeItem("token")
            this.usuario = {
                id: "",
                nome: "",
                email: ""
            }
            router.push({ name: "login" })
        }
    }
})