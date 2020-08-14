<template>
  <div class="leading-normal tracking-normal text-gray-900">
    
    <LoginModal v-if="login" v-on:closeModalMessage="closeModals" v-on:switchModalMessage="switchModals" />
    <SignupModal v-if="signup" v-on:closeModalMessage="closeModals" v-on:switchModalMessage="switchModals" />
    
    <div class="h-screen pb-14 bg-right bg-cover bg-cool-dark bg-no-repeat" style="background-image:url('/img/hero-bg.jpg'); background-position: left 30vw top 0px;">
      <div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center move-up-down">
      <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-orange-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Modern Fitness</h1>
          <p class="leading-normal text-gray-300 text-base md:text-2xl text-center md:text-left slide-in-bottom-subtitle">
            Do you have what it takes to be the biggest dude in the gym?
          </p>
          <p class="leading-normal text-gray-600 text-base md:text-1xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            Sign up today and start getting in shape!
          </p>
          <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            <button v-on:click="login=true" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded h-12 mr-4 slide-in-bottom-subtitle">
              Login
            </button>
            <button v-on:click="signup=true" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded h-12 slide-in-bottom-subtitle">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import LoginModal from '../components/LoginModal.vue'
import SignupModal from '../components/SignupModal.vue'

export default {
  components: { LoginModal, SignupModal },
  
  data() {
    return {
      login: false,
      signup: false
    }
  },

  methods: {
    closeModals() {
      this.login = false
      this.signup = false
    },
    switchModals() {
      this.login = !this.login
      this.signup = !this.login
    }
  }
}
</script>
