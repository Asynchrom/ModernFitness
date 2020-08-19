<template>
    <div class="text-gray-900 bg-gray-200" style="min-height:100vh">

        <Loading v-if="loading" />

        <router-link to="/menu/" class="absolute z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="text-align: center;width:60px;height:60px; margin-top:40px; margin-left: 40px">
            <i class="fas fa-backward" style="margin-top: 22px;"></i>
        </router-link>
        <button v-bind:class="{ 'bg-blue-500': editingEnabled, 'hover:bg-blue-700': editingEnabled }" v-on:click="editingEnabled=!editingEnabled" class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:60px;height:60px; margin-top:40px; margin-right: 40px">
            <i class="fas fa-edit"></i>
        </button>
        <button v-bind:class="{ 'bg-blue-500': newWorkoutEditing, 'hover:bg-blue-700': newWorkoutEditing }" v-on:click="newWorkoutClick" class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:60px;height:60px; margin-top:110px; margin-right: 40px">
            <i class="fas fa-plus-circle"></i>
        </button>

        <ExerciseSearch v-if="exerciseSearchOpen" v-on:closeModalMessage="closeSearch()" v-on:chosenExerciseMessage="exerciseChosen" />

        <div class="container mx-auto p-8">

            <div v-if="editorOpen" class="p-0 justify-center shadow-md bounce-top-fast">
                <div class="mb-0 text-md bg-white relative">
                    <p class="inline-block font-bold p-3 px-5">Date:</p>
                    <input class="focus:shadow-outline focus:bg-gray-200 inline-block text-gray-700 text-sm font-bold mb-2" v-model="currentWorkout.date" style="cursor: pointer" type="date">
                    <p class="inline-block font-bold p-3 px-5">Duration:</p>
                    <input class="text-center focus:shadow-outline focus:bg-gray-200 border-transparent focus:border-blue-400 text-gray-700 text-sm font-bold" type="number" v-model="currentWorkout.duration" style="cursor: pointer;width:40px">
                    <span class="text-gray-700 text-sm font-bold">Min</span>
                    <p class="inline-block font-bold ml-5 p-3 px-5">Muscle Groups: <span class="px-5 text-gray-700 font-bold">{{currentMuscleGroups}}</span></p>

                    <button v-on:click="closeClicked()" class="absolute bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:40px;height:40px; right:-15px; top:-10px">
                         x
                    </button>
                </div>
                <table class="w-full text-md bg-white">
                    <tbody>
                        <tr class="border-b">
                            <th class="text-left py-3 pl-5">Exercise</th>
                            <th class="text-left py-3">Muscles</th>
                            <th class="text-left py-3">Sets</th>
                            <th class="text-left py-3">Reps</th>
                            <th></th>
                        </tr>

                        <tr v-for="(exercise, index) in currentWorkout.exercises" v-bind:key="index" class="border-b hover:bg-orange-100 bg-gray-100">
                            <td class="p-3 px-5 pr-20"><p>{{exercise.name}}</p></td>
                            <td class="p-3 pr-20"><p>{{exercise.muscle}}</p></td>
                            <td class="py-3 pr-20"><input v-bind:disabled="!(editingEnabled || newWorkoutEditing)" v-model="exercise.sets" class="text-center bg-transparent border-2" style="width:40px" type="number" /></td>
                            <td class="py-3 pr-20"><input v-bind:disabled="!(editingEnabled || newWorkoutEditing)" v-model="exercise.reps" class="text-center bg-transparent border-2" style="width:40px" type="number" /></td>
                            
                            <button v-on:click="removeFromEditor(index)" v-if="editingEnabled || newWorkoutEditing" type="button" class="absolute text-sm bg-orange-500 hover:bg-orange-700 text-white my-3 py-1 px-2 rounded focus:outline-none focus:shadow-outline" style="right:30px">Remove</button>
                            
                        </tr>
                        <tr v-if="editingEnabled || newWorkoutEditing" v-on:click="exerciseSearchOpen = true" class="border-b hover:bg-orange-100 bg-gray-100" style="cursor: pointer">
                            <td colspan="5" class="py-3 pl-5 text-gray-500">+ Add exercise</td>
                        </tr>
                       
                    </tbody>
                </table>
                <div v-if="editingEnabled || newWorkoutEditing" class="pt-2 text-md bg-white text-center">
                    <button v-on:click="save()" class=" m-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-2 rounded">
                        Save
                    </button>
                    <span v-if="saveSuccess"><i class="absolute m-3 fa-2x text-green-500 fas fa-check-circle" style="bottom:0px"></i></span>
                    <span class="text-red-600">{{error}}</span>
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

                        <tr v-for="(workout, index) in workouts" v-bind:key="index" v-bind:class="{ 'bg-gray-200' : ((index%2)==0)}"  class="border-b hover:bg-orange-100 relative">
                            <td v-on:click="workoutClicked(workout)" class="p-3 px-5" style="cursor: pointer"><p>{{workout.date}}</p></td>
                            <td v-on:click="workoutClicked(workout)" class="p-3 px-5" style="cursor: pointer"><p>{{workout.duration}} min</p></td>
                            <td v-on:click="workoutClicked(workout)" class="p-3 px-5" style="cursor: pointer"><p>{{workout.muscle}}</p></td>
                            <button v-on:click="deleteWorkout(workout._id)" v-if="editingEnabled" type="button" class="absolute z-10 text-sm bg-orange-500 hover:bg-orange-700 text-white my-3 py-1 px-2 rounded focus:outline-none focus:shadow-outline" style="right:30px">
                                Delete
                            </button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../components/Loading'
import ExerciseSearch from '../components/ExerciseSearch'
import store from '../store'
import service from '../sevices'

export default {
    components: { Loading, ExerciseSearch },

    data() {
        return {
            workouts: [],
            saveSuccess: false,
            loading: false,
            editorOpen: false,
            editingEnabled: false,
            newWorkoutEditing: false,
            currentWorkout: {},
            exerciseSearchOpen: false,
            error: '',
            computedUpdate: 0
        }
    },

    computed: {
        currentMuscleGroups: function () {
            this.computedUpdate
            if(this.currentWorkout.exercises == undefined || Object.keys(this.currentWorkout).length === 0) return;
            let arr = []
            this.currentWorkout.exercises.forEach(el => arr.push(el.muscle))
            let unique = arr.filter((value, index, self) => {
                return self.indexOf(value) === index
              })
            return unique.join()
        }
    },

    async mounted (){
        if(store.workouts.length > 0) this.workouts = store.workouts
        else{
            this.loading = true
            this.workouts = await service.getWorkouts()
            this.loading = false
        }
    },

    methods: {
        async workoutClicked(workout) {
            console.log(workout)
            this.editorOpen = false
            await this.$forceUpdate()
            this.editorOpen = true
            this.currentWorkout = JSON.parse(JSON.stringify(workout))
            this.newWorkoutEditing = false
            this.error = ''
            this.saveSuccess = false
        },
        async newWorkoutClick() {
            if(this.newWorkoutEditing){
                this.newWorkoutEditing = false
                this.editorOpen = false
            }
            else {
                this.newWorkoutEditing = true
                this.editorOpen = false
                await this.$forceUpdate()
                this.editorOpen = true
                this.currentWorkout = {}
                this.error = ''
                this.saveSuccess = false
            } 
        },
        closeClicked() {
            this.editorOpen = false;
            this.newWorkoutEditing = false
        },
        closeSearch() {
            this.exerciseSearchOpen = false;
        },
        exerciseChosen(exercise) {
            if(this.currentWorkout.exercises == undefined) this.currentWorkout.exercises = []
            exercise.sets = 0
            exercise.reps = 0
            this.currentWorkout.exercises.push(exercise)
            this.exerciseSearchOpen = false
            this.computedUpdate++
        },
        async removeFromEditor(index) {
            this.currentWorkout.exercises.splice(index, 1)
            await this.$forceUpdate()
            this.computedUpdate++
        },
        async save() {
            this.currentWorkout.duration = parseInt(this.currentWorkout.duration)
            if (this.currentWorkout.date == undefined) this.error = 'Please choose a valid date!'
            else if (this.currentWorkout.duration == undefined || isNaN(this.currentWorkout.duration) || this.currentWorkout.duration < 0 ) this.error = 'Please choose a valid duration!'
            else if (this.currentWorkout.exercises == undefined || this.currentWorkout.exercises.length == 0) this.error = 'Please choose at least one exercise!'
            else {
                try{
                    this.loading = true
                    this.currentWorkout.muscle = this.currentMuscleGroups
                    if (this.newWorkoutEditing) await service.saveWorkout(this.currentWorkout)
                    else await service.updateWorkout(this.currentWorkout)
                    this.error = ''
                    this.saveSuccess = true
                }
                catch(error){
                    this.error = error.response.data
                }
                finally{
                    this.workouts = await service.getWorkouts()
                    this.loading = false
                }
            }
        },
        async deleteWorkout(id) {
            try {
                this.loading = true
                await service.deleteWorkout(id)
                this.workouts = await service.getWorkouts()
            }
            finally {
                this.loading = false
            }
        }
    }
}
</script>
