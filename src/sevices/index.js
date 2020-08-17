import { Service } from "../sevices/service"
import { Authenticated, Credentials } from "../store"

export default {
    async signup() {
        await Service.put("/users/signup", Credentials.user)
    },
    async login() {
        let response = await Service.post("/users/login", Credentials.user)
        Credentials.user = response.data.user
        Credentials.token = response.data.token
        Authenticated = true
        localStorage.setItem("Credentials", JSON.stringify(Credentials))
    }
}