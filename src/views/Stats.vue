<template>
    <div class="text-gray-900 bg-gray-200">

        <Loading v-if="loading" />

        <router-link to="/menu/" class="absolute z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="text-align: center;width:60px;height:60px; margin-top:40px; margin-left: 40px">
            <i class="fas fa-backward" style="margin-top: 22px;"></i>
        </router-link>

        <div class="container mx-auto p-2" style="min-height: 100vh">
            <div class="mt-10 flex justify-center">
                <div class="bg-gray-200 pt-2">
                    <div class="container mx-auto">
                        <div class="inputs w-full max-w-2xl p-6 pt-0 mx-auto">
                            <h2 class="text-2xl text-gray-900">Account Setting</h2>
                            <div class="mt-6 border-t border-gray-400 pt-4">
                                <div class='w-full flex flex-wrap -mx-3 mb-6'>
                                    <div class='w-full md:w-full px-3 mb-10'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Username</label>
                                        <input disabled v-model="store.credentials.user.username" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'>
                                    </div>
                                    <div class='w-full md:w-1/2 px-3 mb-6'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>New Password</label>
                                        <input v-model="newPassword" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password' placeholder="******************">
                                    </div>
                                    <div class='w-full md:w-1/2 px-3 mb-6'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Old Password</label>
                                        <input v-model="oldPassword" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password' placeholder="******************">
                                    </div>
                                    
                                        <button v-on:click="updatePassword()" class=" m-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-2 rounded">
                                            Update password
                                        </button>
                                        <span v-if="passwordSuccess"><i class="m-3 fa-2x text-green-500 fas fa-check-circle"></i></span>
                                        <span class="my-auto text-red-600">{{passwordError}}</span>

                                    <div class="relative w-full border-t border-gray-400 pt-4 m-2">
                                        <h2 class="text-2xl text-gray-900 mt-2">Personal info</h2>
                                        <div class="flex items-center justify-between mt-4">
                                            
                                            <div class='w-full md:w-1/2 px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>first name</label>
                                                <input v-model="store.credentials.user.firstName" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'>
                                            </div>
                                            <div class='w-full md:w-1/2 px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>last name</label>
                                                <input v-model="store.credentials.user.lastName" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between mt-4 border-gray-400">
                                            
                                            <div class='w-full md:w-1/3 px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>City</label>
                                                <input v-model="store.credentials.user.city" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500' type='text'>
                                            </div>
                                            <div class="w-full md:w-1/3 px-3 mb-6">
                                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>State</label>
                                                <div class="relative">
                                                <select v-model="store.credentials.user.state" class="block appearance-none w-full border-gray-400 border text-gray-700 shadow-inner py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
                                                    <option>Croatia</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                                </div>
                                            </div>
                                            <div class='w-full md:w-1/3 px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Zip</label>
                                                <input v-model="store.credentials.user.zip" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'>
                                            </div>
                                        </div>
                                        <button v-on:click="updateInfo()" class=" m-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-2 rounded">
                                            Update personal info
                                        </button>
                                        <span v-if="infoSuccess"><i class="absolute m-3 fa-2x text-green-500 fas fa-check-circle" style="bottom:0px"></i></span>
                                        <span class="text-red-600">{{infoError}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            passwordError: '',
            infoError: '',
            newPassword: '',
            oldPassword: '',
            passwordSuccess: false,
            infoSuccess: false
        }
    },

    methods: {
        async updatePassword() {
            try{
                this.loading = true
                await service.updatePassword(this.newPassword, this.oldPassword)
                this.passwordError = ''
                this.passwordSuccess = true
            }
            catch (error) {
                this.passwordSuccess = false
                this.passwordError = error.response.data
            }
            finally {
                this.loading = false
            }
        },
        async updateInfo() {
            try{
                this.loading = true
                await service.updateInfo()
                this.infoError = ''
                this.infoSuccess = true
            }
            catch (error) {
                this.infoSuccess = false
                this.infoError = error.response.data
            }
            finally {
                this.loading = false
            }
        }
    }
}
</script>
