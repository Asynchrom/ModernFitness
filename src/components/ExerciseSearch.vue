<template>
  <div class="fixed z-10 bottom-0 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center">

    <div class="fixed inset-0 transition-opacity">
      <div v-on:click="closeModal" class="absolute inset-0 bg-black opacity-75"></div>
    </div>

    <div class="bg-white w-full max-w-xs rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <form class="rounded-lg px-8 pt-6">
          
        <label class="block text-gray-700 text-sm font-bold mb-1" for="username">
            Exercises
        </label>
        <div class="mb-4">
          <input v-model="search" class="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Search">
        </div>
      </form>
      <div class="px-8 pb-2 overflow-y-auto" style="max-height:70vhpx">
        <table class="w-full text-md bg-white rounded mb-4">
                    <tbody>
                        <tr v-for="exercise in exercises" v-bind:key="exercise.id" class="border-b rounded-lg hover:bg-orange-100 relative" style="cursor: pointer">
                            <p class="p-3">{{exercise.name}} <span class="float-right">{{exercise.muscleGroup}}</span> </p>
                           </tr>
                    </tbody>
                </table>
      </div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'
import { Exercises } from '../store.js'

export default {

    data() {
        return {
            exercises: Exercises,
            search: ''
        }
    },

    watch: {
        search: _.debounce(function(value) {
            this.filterExercises(value);
        }, 500)
    },

    mounted (){
        this.exercises = this.exercises.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
        })
    },
    
    methods: {
        closeModal() {
            this.$emit('closeModalMessage')
        },
        
        filterExercises(value) {
            if (value == '') {
                this.exercises = Exercises;
                this.exercises = this.exercises.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0;
                });
            }
            else {
                value = value.toUpperCase()
                this.exercises = this.exercises.filter(
                    exercise =>  exercise.name.toUpperCase().includes(value) || exercise.muscleGroup.toUpperCase().includes(value)
                )
            }
        },
    }
}
</script>

