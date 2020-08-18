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
        if(store.exercises.length == 0) {
            let response = await Service.post("/exercises", {id: store.credentials.user._id})
            store.exercises = response.data
        }
        return store.exercises
    },
    async saveExercise(exercise) {
        exercise.owner = store.credentials.user._id
        let response = await Service.put("/exercises/save", exercise)
        exercise._id = response.data
        for (let i = 0; i < store.exercises.length; i++) {
            if (exercise.name < store.exercises[i].name) return store.exercises.splice(i, 0, exercise)
        }
        store.exercises.push(exercise)
    },
    async deleteExercise(exerciseId) {
        await Service.patch("/exercises/delete", {id: exerciseId, owner: store.credentials.user._id})
        for (let i = 0; i < store.exercises.length; i++) {
            if (exerciseId == store.exercises[i]._id) return store.exercises.splice(i, 1)
        }
    },
    async getWorkouts() {
        if(store.workouts.length == 0) {
            let response = await Service.post("/workouts", {id: store.credentials.user._id})
            store.workouts = response.data
        }
        return store.workouts
    },
    async saveExercise(exercise) {
        exercise.owner = store.credentials.user._id
        let response = await Service.put("/exercises/save", exercise)
        exercise._id = response.data
        for (let i = 0; i < store.exercises.length; i++) {
            if (exercise.name < store.exercises[i].name) return store.exercises.splice(i, 0, exercise)
        }
        store.exercises.push(exercise)
    },
}