<template>
  <div class="fixed z-10 bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">

    <div class="fixed inset-0 transition-opacity">
      <div v-on:click="closeModal" class="absolute inset-0 bg-black opacity-75"></div>
    </div>

    <div class="w-full max-w-xs rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-200 focus:bg-white" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none bg-gray-200 focus:bg-white" id="password" type="password" placeholder="******************">
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button v-on:click="login" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="button">
            Login
          </button>
          <a v-on:click="switchModal" class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700" href="#">
            Register for a new account?
          </a>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('closeModalMessage')
    },
    switchModal() {
      this.$emit('switchModalMessage')
    },
    login() {
      this.$router.replace({ name: "Menu" });
    }
  }
}
</script>
