import { useAuth } from '@/stores/auth'

export default async function routes(to, from, next) {
    if(to.meta.login) {
        const auth = useAuth()
        if(auth.token && auth.user) {
            const isAuthenticated = await auth.checkToken()
            console.log(isAuthenticated)
            if(isAuthenticated) next()
            else next({name: "login"})
        } else {
            next({name: "login"})
        }
    } else {
    next()
    }
}