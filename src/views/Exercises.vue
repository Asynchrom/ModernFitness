<template>
    <div class="bg-gray-200" style="min-height:100vh">
        <router-link to="/menu/" class="absolute z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="text-align: center;width:60px;height:60px; margin-top:40px; margin-left: 40px">
            <i class="fas fa-backward" style="margin-top: 22px;"></i>
        </router-link>
        <button v-on:click="showSearch=!showSearch" v-bind:class="{ 'bg-blue-500': showSearch, 'hover:bg-blue-700': showSearch }" class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:60px;height:60px;margin-top:110px; margin-right: 40px">
            <i class="fas fa-search"></i>
        </button>
        <button v-on:click="showCustom=!showCustom" v-bind:class="{ 'bg-blue-500': showCustom, 'hover:bg-blue-700': showCustom }" class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:60px;height:60px;margin-top:40px; margin-right: 40px">
            <i class="fas fa-th-list"></i>
        </button>
        <button v-on:click="editingClick" v-bind:class="{ 'bg-blue-500': isEditing, 'hover:bg-blue-700': isEditing }" class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right"  style="width:60px;height:60px;margin-top:180px; margin-right: 40px">
            <i class="fas fa-plus-circle"></i>
        </button>

        <div v-if="showSearch" class="p-5 mx-32">
            <div class="bg-white flex items-center rounded-full shadow-xl">
            <input v-model="search" class="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Search">
            </div>
        </div>

        <div class="container mx-auto p-8">
            <div class="flex flex-row flex-wrap -mx-2">       
                <div v-if="isEditing" class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2 bounce-top-fast">
                    <div class="relative bg-white rounded border">
                        <div class="block bg-gray-200 border-b" style="height:250px">
                            <p class="absolute left-0 bg-orange-500 text-white text-xs font-bold px-2 rounded mr-4" style="top:20px">
                                New entry!
                            </p>
                            <p v-if="error" class="absolute left-0 bg-red-600 text-white text-xs font-bold px-2 rounded mr-4 bounce-top-fast" style="top:50px">
                                {{error}}
                            </p>
                        <img class="block" src="/img/image-placeholder.png" style="height: 100%; width: 100%; object-fit: cover">
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-bold">
                                <input v-model="name" class="appearance-none bg-transparent w-full font-bold mr-3 pr-2 leading-tight focus:outline-none" placeholder="Exercise Name">   
                                <button v-on:click="saveEntry" class="absolute right-0 bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 h-8 rounded mr-4">
                                    Save
                                </button>
                            </h3>

                            <select v-model="muscleGroup" class="text-gray-600 appearance-none bg-transparent border-none rounded text-sm mr-3 py-0leading-tight focus:outline-none" style="cursor: pointer">
                                <option value="" disabled selected>Choose a muscle group</option>
                                <option v-for="muscles in muscleGroups" v-bind:value="muscles" v-bind:key="muscles">
                                    {{muscles}}
                                </option>
                            </select>
                            <textarea v-model="description" class="appearance-none bg-transparent border-none w-full mr-3 py-1 pr-2 leading-tight focus:outline-none" style="height: 150px; overflow-y: scroll;" placeholder="Write something about this exercise!" />
                        </div>
                    </div>
                </div>
                
                <div v-for="exercise in exercises" v-bind:key="exercise.id" v-bind:hidden="(showCustom && !exercise.custom)" class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                    <div v-if="exercise.custom" class="relative bg-white rounded border">
                        <div class="block bg-gray-200 border-b" style="height:250px">
                            <p class="absolute left-0 bg-orange-500 text-white text-xs font-bold px-2 rounded mr-4" style="top:20px">
                                Custom entry!
                            </p>  
                            <img class="block" v-bind:src=" exercise.img" style="height: 100%; width: 100%; object-fit: cover">
                        </div>
                        <div class="p-4">
                        <h3 class="text-lg font-bold">
                            <p class="">
                            {{exercise.name}}
                            
                            <button class="absolute text-sm right-0 bg-orange-500 hover:bg-orange-700 text-white px-4 rounded h-8 mr-4">
                                        Delete
                            </button>
                            </p>
                        </h3>
                        <p class="block mb-2 text-sm text-gray-600">{{exercise.muscleGroup}}</p>
                        <p style="height: 150px; overflow-y: scroll;" >
                            {{exercise.description}}
                        </p>
                        </div>
                    </div>
                    <div v-else-if="!showCustom" class="relative bg-white rounded border">
                        <div class="block bg-gray-200 border-b" style="height:250px">
                            <img class="block" v-bind:src=" exercise.img" style="height: 100%; width: 100%; object-fit: cover">
                        </div>
                        <div class="p-4">
                        <h3 class="text-lg font-bold">
                            <p class="stretched-link">
                            {{exercise.name}}
                            </p>
                        </h3>
                        <p class="block mb-2 text-sm text-gray-600">{{exercise.muscleGroup}}</p>
                        <p style="height: 150px; overflow-y: scroll;" >
                            {{exercise.description}}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import { Exercises, MuscleGroups } from '../store.js'

export default {
    data() {
        return {
            showCustom: false,
            showSearch: false,
            isEditing: false,
            exercises: Exercises,
            muscleGroups: MuscleGroups,
            name: '',
            muscleGroup: '',
            description: '',
            search: '',
            error: '',
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

        editingClick() {
            this.isEditing = !this.isEditing
            this.muscleGroup = ''
            this.name = ''
            this.description = ''
            this.error = ''
        },

        async saveEntry() {
            await this.$forceUpdate()
            console.log(this.name.length)
            if(this.name.length < 5) this.error = 'Name is too short!';
            else if(this.muscleGroup == '') this.error = 'Must have a muscle group!';
            else if(this.description.length < 10) this.error = 'Description is too short!';
            else {
                Exercises.unshift({    
                    custom: true,
                    img: '',
                    name: this.name.charAt(0).toUpperCase() + this.name.slice(1),
                    muscleGroup: this.muscleGroup,
                    description: this.description
                })
                this.isEditing = false
            }
        }
    }
}
</script>
