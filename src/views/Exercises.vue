<template>
    <div class="bg-gray-200" style="min-height:100vh">

        <Loading v-if="loading" />

        <router-link to="/menu/" class="absolute z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="text-align: center;width:60px;height:60px; margin-top:40px; margin-left: 40px">
            <i class="fas fa-backward" style="margin-top: 22px;"></i>
        </router-link>
        <button v-on:click="showSearch=!showSearch" v-bind:class="{ 'bg-blue-500': showSearch, 'hover:bg-blue-700': showSearch }" title="Search" class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:60px;height:60px;margin-top:110px; margin-right: 40px">
            <i class="fas fa-search"></i>
        </button>
        <button v-on:click="showCustom=!showCustom" v-bind:class="{ 'bg-blue-500': showCustom, 'hover:bg-blue-700': showCustom }" title="Custom exercises" class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="width:60px;height:60px;margin-top:40px; margin-right: 40px">
            <i class="fas fa-th-list"></i>
        </button>
        <button v-on:click="editingClick" v-bind:class="{ 'bg-blue-500': isEditing, 'hover:bg-blue-700': isEditing }" title="Add new exercises" class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right"  style="width:60px;height:60px;margin-top:180px; margin-right: 40px">
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
                            <p class="absolute left-0 bg-orange-500 text-white text-xs font-bold px-2 rounded-r mr-4" style="top:20px">
                                New entry!
                            </p>
                            <p v-if="error" class="absolute left-0 bg-red-600 text-white text-xs font-bold px-2 rounded-r mr-4 bounce-top-fast" style="top:50px">
                                {{error}}
                            </p>
                        <img v-if="img" class="block" v-on:click="showImgSearch = true" v-bind:src="img" style="height: 100%; width: 100%; object-fit: cover;cursor: pointer" />
                        <img v-else class="block" v-on:click="showImgSearch = true" src="/img/image-placeholder-2.png" style="height: 100%; width: 100%; object-fit: cover;cursor: pointer" />
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-bold">
                                <input v-model="name" class="appearance-none bg-transparent w-full font-bold mr-3 pr-2 leading-tight focus:outline-none" placeholder="Exercise Name">   
                                <button v-on:click="saveEntry()" class="absolute right-0 bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 h-8 rounded mr-4">
                                    Save
                                </button>
                            </h3>

                            <select v-model="muscle" class="text-gray-600 appearance-none bg-transparent border-none rounded text-sm mr-3 py-0leading-tight focus:outline-none" style="cursor: pointer">
                                <option value="" disabled selected>Choose a muscle group</option>
                                <option v-for="muscles in muscleGroups" v-bind:key="muscles">
                                    {{muscles}}
                                </option>
                            </select>
                            <textarea v-on:keydown.enter.prevent="saveEntry()" v-model="description" class="appearance-none bg-transparent border-none w-full mr-3 py-1 pr-2 leading-tight focus:outline-none" style="height: 150px; overflow-y: scroll;" placeholder="Write something about this exercise!" />
                        </div>
                    </div>
                </div>

                <div v-if="showImgSearch" class="fixed z-20 bottom-0 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center">
                    <div class="fixed inset-0 transition-opacity">
                    <div v-on:click="(showImgSearch = false, imgUrl = '')" class="absolute inset-0 bg-black opacity-75"></div>
                    </div>
                    <div class="bg-white w-full max-w-xs rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div class="rounded-lg px-8 pt-6 mb-4">
                        <p class="block text-gray-700 text-sm font-bold mb-1" for="username">
                            URL of image:
                        </p>
                        <div class="w-full">
                            <div class="flex w-full items-center border-b border-orange-500 py-2">
                                <input v-model="imgUrl" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="https://example.com/img-1.jpg" >
                                <button v-on:click="(showImgSearch = false, img = imgUrl)" class="flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-4 rounded">
                                Get
                                </button>
                            </div>
                        </div>
                        <p class="text-gray-700 text-xs italic">Make sure you see the image properly in preview below!</p>
                    </div>
                    <div class="px-8 pb-8 overflow-y-auto" style="max-height:70vhpx">
                        <img class="block" v-bind:src="imgUrl" style="height: 100%; width: 100%; object-fit: cover" />
                    </div>
                    </div>
                </div>
                
                <div v-for="exercise in exercises" v-bind:key="exercise._id" v-bind:hidden="(showCustom && exercise.public)" class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                    <div v-if="!exercise.public" class="relative bg-white rounded border">
                        <div class="block bg-gray-200 border-b" style="height:250px">
                            <p class="absolute left-0 bg-orange-500 text-white text-xs font-bold px-2 rounded-r mr-4" style="top:20px">
                                Personal
                            </p>  
                            <img class="block" v-bind:src="exercise.img" style="height: 100%; width: 100%; object-fit: cover">
                        </div>
                        <div class="p-4">
                        <h3 class="text-lg font-bold">
                            <p class="">
                            {{exercise.name}}
                            
                            <button v-on:click="deleteEntry(exercise._id)" class="absolute text-sm right-0 bg-orange-500 hover:bg-orange-700 text-white px-4 rounded h-8 mr-4">
                                        Delete
                            </button>
                            </p>
                        </h3>
                        <p class="block mb-2 text-sm text-gray-600">{{exercise.muscle}}</p>
                        <p style="height: 150px; overflow-y: scroll;" >
                            {{exercise.description}}
                        </p>
                        </div>
                    </div>
                    <div v-else-if="!showCustom" class="relative bg-white rounded border">
                        <div class="block bg-gray-200 border-b" style="height:250px">
                            <img class="block" v-bind:src="exercise.img" style="height: 100%; width: 100%; object-fit: cover">
                        </div>
                        <div class="p-4">
                        <h3 class="text-lg font-bold">
                            <p class="stretched-link">
                            {{exercise.name}}
                            </p>
                        </h3>
                        <p class="block mb-2 text-sm text-gray-600">{{exercise.muscle}}</p>
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
import Loading from '../components/Loading'
import _ from 'lodash'
import store from '../store'
import service from '../sevices'

export default {
    components: { Loading },

    data() {
        return {
            showImgSearch: false,
            showCustom: false,
            showSearch: false,
            isEditing: false,
            loading: false,
            search: '',
            error: '',
            exercises: [],
            muscleGroups: store.muscleGroups,
            img: '',
            imgUrl: '',
            name: '',
            muscle: '',
            description: ''
        }
    },

    watch: {
        search: _.debounce(function(value) {
            this.filterExercises(value);    
        }, 500)
    },

    async mounted (){
        if(store.exercises.length > 0) this.exercises = store.exercises
        else{
            this.loading = true
            this.exercises = await service.getExercises()
            this.loading = false
        }
    },

    methods: {
        filterExercises(value) {
            if (value == '')
                this.exercises = store.exercises
            else {
                this.exercises = store.exercises
                value = value.toUpperCase()
                this.exercises = this.exercises.filter(
                    exercise => exercise.name.toUpperCase().includes(value) || exercise.muscle.toUpperCase().includes(value)
                )
            }
        },
        editingClick() {
            this.isEditing = !this.isEditing
            this.muscleGroup = ''
            this.name = ''
            this.description = ''
            this.error = ''
            this.img =''
        },
        getImage() {

        },
        async saveEntry() {
            try{
                await this.$forceUpdate()
                if (this.name.length < 5) this.error = 'Name is too short!';
                else if (this.muscle == '') this.error = 'Must have a muscle group!';
                else if (this.description.length < 10) this.error = 'Description is too short!';
                else {
                    this.loading = true
                    this.name = this.name.trim()
                    this.name =  this.name.charAt(0).toUpperCase() + this.name.slice(1);
                    await service.saveExercise({
                        img: this.img,
                        name: this.name,
                        muscle: this.muscle,
                        description: this.description
                    })
                    this.exercises = await service.getExercises()
                    this.isEditing = false
                }
            }
            finally {
                this.loading = false
            }
        },
        async deleteEntry(id) {
            try {
                this.loading = true
                await service.deleteExercise(id)
                this.exercises = await service.getExercises()
            }
            finally {
                this.loading = false
            }
        }
    }
}
</script>
