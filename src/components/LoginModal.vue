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
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input v-model="store.credentials.user.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-200 focus:bg-white" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="store.credentials.user.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none bg-gray-200 focus:bg-white" id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
          <button v-on:click="login()" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
            Login
          </button>
          <a v-on:click="switchModal()" class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700" href="#">
            Register for a new account?
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
    async login() {
      try{
        this.loading = true
        await service.login()
        this.$router.go({ name: "Menu" })
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
