<template>
  <div class="fixed z-10 bottom-0 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center">

    <Loading v-if="loading" />

    <div class="fixed inset-0 transition-opacity">
      <div v-on:click="closeModal()" class="absolute inset-0 bg-black opacity-75"></div>
    </div>

    <div class="w-full max-w-xs rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">

        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-1 mb-4 rounded relative" role="alert">
          <span class="block sm:inline">{{error}}</span>
          <span v-on:click="error = ''" class="absolute top-0 bottom-0 right-0 px-4 py-1"> 
            <svg class="fill-current h-6 w-6 text-red-500" role="button" viewBox="0 0 20 20"><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Workout Level - {{hardness}}
          </label>
            <div class="slidecontainer">
              <input class="slider block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="range" min="1" max="10" v-model="hardness">
            </div>
        </div>

        
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <button v-on:click.prevent="chest=!chest" v-bind:class="{ 'bg-blue-500': chest, 'hover:bg-blue-700': chest }" class="focus:outline-none bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 rounded" style="width:100%">
              Chest
            </button>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <button v-on:click.prevent="arms=!arms" v-bind:class="{ 'bg-blue-500': arms, 'hover:bg-blue-700': arms }" class="focus:outline-none bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 rounded" style="width:100%">
              Arms
            </button>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <button v-on:click.prevent="back=!back" v-bind:class="{ 'bg-blue-500': back, 'hover:bg-blue-700': back }" class="focus:outline-none bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 rounded" style="width:100%">
              Back
            </button>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <button v-on:click.prevent="shoulders=!shoulders" v-bind:class="{ 'bg-blue-500': shoulders, 'hover:bg-blue-700': shoulders }" class="focus:outline-none bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 rounded" style="width:100%">
              Shoulders
            </button>
          </div>
        </div><div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <button v-on:click.prevent="legs=!legs" v-bind:class="{ 'bg-blue-500': legs, 'hover:bg-blue-700': legs }" class="focus:outline-none bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 rounded" style="width:100%">
              Legs
            </button>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <button v-on:click.prevent="abs=!abs" v-bind:class="{ 'bg-blue-500': abs, 'hover:bg-blue-700': abs }" class="focus:outline-none bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 rounded" style="width:100%">
              Abs
            </button>
          </div>
        </div>
        <p class="text-gray-700 text-xs italic mt-4">We will also approximate workout duration based on workout level!</p>
        <div class="flex items-center justify-center">
          <button v-on:click="submit()" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none" type="button">
            OK
          </button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import Loading from '../components/Loading'
import service from '../sevices'

export default {
  components: { Loading },

  data() {
    return {
      hardness: 5,
      loading: false,
      error: '',
      chest: false,
      arms: false,
      back: false,
      shoulders: false,
      legs: false,
      abs: false
    }
  },
  
  methods: {
    async submit() {
      try{
        if(!(this.chest || this.arms || this.back || this.shoulders || this.legs || this.abs)){
          this.error = 'Select at least one muscle group!'
        }
        else{
          this.loading = true
          let exercises = JSON.parse(JSON.stringify(await service.getExercises()))
          let chosenGroups = []
          if (this.chest) chosenGroups.push('Chest')
          if (this.arms) chosenGroups.push('Arms')
          if (this.back) chosenGroups.push('Back')
          if (this.shoulders) chosenGroups.push('Shoulders')
          if (this.legs) chosenGroups.push('Legs')
          if (this.abs) chosenGroups.push('Abs')
          for(let i = exercises.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = exercises[i]
            exercises[i] = exercises[j]
            exercises[j] = temp
          }

          let generatedExercises = []
          chosenGroups.forEach(el => {
              for (let i = 0; i < exercises.length; i++) {
                  if (exercises[i].muscle == el){
                    exercises[i].sets = 1
                    exercises[i].reps = Math.floor(Math.random() * 5) + Math.floor(Number(this.hardness)/2) + 4
                    generatedExercises.push(exercises[i])
                    exercises.splice(i, 1)
                    break
                  }
              }
          })

          let points = 5 + Number(this.hardness) - chosenGroups.length
          let duration = (5 + Number(this.hardness)) * 4

          let j = 0
          while (points-- > 0) {
            if (++j == chosenGroups.length) j = 0
            let found = false
            if (Math.floor(Math.random() * 2)){
              for (let i = 0; i < exercises.length; i++) {
                  if (exercises[i].muscle == chosenGroups[j]){
                    exercises[i].sets = 1
                    exercises[i].reps = Math.floor(Math.random() * 5) + Math.floor(Number(this.hardness)/2) + 4
                    generatedExercises.push(exercises[i])
                    exercises.splice(i, 1)
                    found = true
                    break
                  }
              }
            }
            if (!found) {
              for(let i = generatedExercises.length-1; i > 0; i--){
                const j = Math.floor(Math.random() * i)
                const temp = generatedExercises[i]
                generatedExercises[i] = generatedExercises[j]
                generatedExercises[j] = temp
              }
              for (let i = 0; i < generatedExercises.length; i++) {
                if (generatedExercises[i].muscle == chosenGroups[j]){
                  generatedExercises[i].sets++
                  break
                }
              }
            }
          }
          this.$emit('workoutGeneratedMessage', generatedExercises, duration)
        }
      }
      catch (error) {
        this.error = error.response.data
      }
      finally {
        this.loading = false
      }
    },
    closeModal() {
      this.$emit('closeModalMessage')
    },
    async login() {
      try{
        this.loading = true
      }
      catch (error) {
        this.error = error.response.data
      }
      finally {
        this.loading = false
      }
    }
  }
}
</script>
