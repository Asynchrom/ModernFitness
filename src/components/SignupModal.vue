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

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-city">
              Username  
            </label>
            <input v-model="store.credentials.user.username" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="KingKeanu">
          </div>

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-state">
              Gender
            </label>
            <div class="relative">
              <select v-model="store.credentials.user.gender" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="Male">Male</option>
                <option value="female">Female</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full px-3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-password">
              Password
            </label>
            <input v-model="store.credentials.user.password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************">
            <p class="text-gray-600 text-xs italic">Don't share your password with anyone!</p>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input v-model="store.credentials.user.firstName" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Keanu">
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input v-model="store.credentials.user.lastName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Reeves">
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-8">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-city">
              City
            </label>
            <input v-model="store.credentials.user.city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Pula">
          </div>

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-state">
              State
            </label>
            <div class="relative">
              <select v-model="store.credentials.user.state" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Croatia</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-zip">
              Zip
            </label>
            <input v-model="store.credentials.user.zip" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="52100">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <button v-on:click="signup()" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
            Signup
          </button>
          <a v-on:click="switchModal()" class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700" href="#">
            Already have an account?
          </a>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import Loading from '../components/Loading'
import store from '../store'
import service from '../sevices'

export default {
  components: { Loading },

  data() {
    return {
      store,
      loading: false,
      error: ''
    }
  },

  methods: {
    closeModal() {
      this.$emit('closeModalMessage')
    },
    switchModal() {
      this.$emit('switchModalMessage')
    },
    async signup() {
      try{
        this.loading = true
        await service.signup()
        this.$emit('switchModalMessage')
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
