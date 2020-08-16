<template>
    <div class="text-gray-900 bg-gray-200" style="min-height:100vh">
        <router-link to="/menu/" class="absolute z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="text-align: center;width:60px;height:60px; margin-top:40px; margin-left: 40px">
            <i class="fas fa-backward" style="margin-top: 22px;"></i>
        </router-link>
        <button class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:60px;height:60px; margin-top:40px; margin-right: 40px">
            <i class="fas fa-edit"></i>
        </button>
        <button class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:60px;height:60px; margin-top:110px; margin-right: 40px">
            <i class="fas fa-plus-circle"></i>
        </button>

        <div class="container mx-auto p-8">

            <div v-if="editorOpen" class="p-0 justify-center shadow-md bounce-top-fast">
                <div class="mb-0 text-md bg-white relative">
                    <p class="inline-block font-bold p-3 px-5">Date:</p>
                    <input class="focus:shadow-outline focus:bg-gray-200 inline-block text-gray-700 text-sm font-bold mb-2" v-bind:value="currentWorkout.date" style="cursor: pointer" type="date">
                    <p class="inline-block font-bold p-3 px-5">Duration:</p>
                    <input class="text-center focus:shadow-outline focus:bg-gray-200 border-transparent focus:border-blue-400 text-gray-700 text-sm font-bold" type="number" v-bind:value="currentWorkout.duration" style="cursor: pointer;width:40px">
                    <span class="text-gray-700 text-sm font-bold">Min</span>
                    <p class="inline-block font-bold ml-5 p-3 px-5">Muscle Groups:</p>

                    <button v-on:click="closeClicked" class="absolute bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:40px;height:40px; right:-15px; top:-10px">
                         x
                    </button>
                </div>
                <table class="w-full text-md bg-white">
                    <tbody>
                        <tr class="border-b">
                            <th class="text-left py-3 pl-5">Exercise</th>
                            <th class="text-left py-3">Muscles</th>
                            <th class="text-left py-3">Sets</th>
                            <th class="text-left py-3">Sets</th>
                            <th></th>
                        </tr>

                        <tr v-for="exercise in currentWorkout.exercises" v-bind:key="exercise.id" class="border-b hover:bg-orange-100 bg-gray-100">
                            <td class="p-3 px-5"><p>{{exercise.name}}</p></td>
                            <td class="p-3 pr-20"><p>{{exercise.muscleGroup}}</p></td>
                            <td class="p-3 pr-20"><p>{{exercise.sets}}x</p></td>
                            <td class="p-3 pr-20"><p>{{exercise.reps}}</p></td>
                            
                            <button type="button" class="justify-end text-sm bg-orange-500 hover:bg-orange-700 text-white my-3 py-1 px-2 rounded focus:outline-none focus:shadow-outline">Remove</button>
                            
                        </tr>
                         <tr class="border-b hover:bg-orange-100 bg-gray-100" style="cursor: pointer">
                            <td colspan="5" class="py-3 pl-5 text-gray-500">+ Add exercise</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mb-0 text-md bg-white text-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded">
                        Save
                    </button>
                </div>
            </div>

            <div class="mt-10 flex justify-center">
                <table class="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                        <tr class="border-b">
                            <th class="text-left p-3 px-5">Date</th>
                            <th class="text-left p-3 px-5">Duration</th>
                            <th class="text-left p-3 px-5">Muscle Groups</th>
                        </tr>

                        <tr v-bind:class="{'disable-stuff': editorOpen}" v-on:click="workoutClicked(workout)" v-for="workout in workouts" v-bind:key="workout.id" class="border-b hover:bg-orange-100 bg-gray-100" style="cursor: pointer">
                            <td class="p-3 px-5"><p>{{workout.date}}</p></td>
                            <td class="p-3 px-5"><p>{{workout.duration}} min</p></td>
                            <td class="p-3 px-5"><p>{{workout.muscles}}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import WorkoutCard from '../components/WorkoutCard.vue'
import { Exercises, Workouts } from '../store.js'

export default {
    components: { WorkoutCard },

    data() {
        return {
            workouts: Workouts,
            editorOpen: false,
            currentWorkout: {},
            currentExercises: Exercises
        }
    },

    methods: {
        workoutClicked(workout) {
            this.editorOpen = true
            this.currentWorkout = workout
        },
        closeClicked() {
            this.editorOpen = false;
            this.currentWorkout = {}
        }
    }
}
</script>
