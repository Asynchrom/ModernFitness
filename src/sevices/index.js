import axios from "axios"
import store from "../store"

let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
})

Service.interceptors.request.use((request) => {
    request.headers['authorization'] = 'Bearer ' + store.credentials.token;
    return request;
})

export default {
    async signup() {
        await Service.put("/users/signup", store.credentials.user)
    },
    async login() {
        let response = await Service.post("/users/login", store.credentials.user)
        store.credentials.user = response.data.user
        store.credentials.token = response.data.token
        localStorage.setItem("Credentials", JSON.stringify(store.credentials))
        store.authenticated = true
    },
    async updatePassword(newPass, oldPass) {
        await Service.patch("/users/password", {id: store.credentials.user._id, newPassword: newPass, oldPassword: oldPass})
    },
    async updateInfo() {
        await Service.patch("/users/info", store.credentials.user)
        localStorage.setItem("Credentials", JSON.stringify(store.credentials))
    },
    async getExercises() {
        let response = await Service.post("/exercises", {id: store.credentials.user._id})
        return response.data
    },
    async saveExercise(exercise) {
        exercise.owner = store.credentials.user._id
        let response = await Service.put("/exercises/save", exercise)
    },
    async deleteExercise(exercise) {
        exercise.owner = store.credentials.user._id
        let response = await Service.put("/exercises/save", exercise)
    }
}