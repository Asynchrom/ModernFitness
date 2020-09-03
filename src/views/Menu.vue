<template>
    <div class="gallery-area">
            <div class="absolute z-20" style="top:20vh; left:calc(50vw - 30vh)">
                <router-link to="/exercises/">
                    <div class="gallery-box" style="height:55vh; width:55vh;">
                        <div class="single-gallery" style="height:55vh; width:55vh;border-radius: 50%;">
                            <div
                            class="gallery-img"
                            style="height:55vh; width:55vh;background-image: url(/img/menu-5.jpg); border-radius: 50%; border: 5px solid #ed8936"
                            ></div>
                            <div class="g-caption">
                                <h1 style="margin-bottom:100%"><strong>Stats</strong></h1>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

        <div class="flex">
                <div class="w-1/2">
                    <router-link to="/exercises/">
                        <div class="gallery-box" style="border-width: 0px 2.5px 2.5px 0px; border-color: #ed8936">
                            <div class="single-gallery">
                                <div
                                class="gallery-img"
                                style="background-image: url(/img/menu-1.jpg);"
                                ></div>
                                <div class="g-caption">
                                    <h1><strong>Exercises</strong></h1>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>


            <div class="w-1/2">
                <router-link to="/workouts/">
                    <div class="gallery-box" style="border-width: 0px 0px 2.5px 2.5px; border-color: #ed8936">
                        <div class="single-gallery">
                            <div
                            class="gallery-img"
                            style="background-image: url(/img/menu-2.jpg);"
                            ></div>
                            <div class="g-caption">
                                <h1 style="margin-left:25vh"><strong>Workouts</strong></h1>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="flex">
            <div class="w-1/2">
                <router-link to="/user/">
                    <div class="gallery-box" style="border-width: 2.5px 2.5px 0px 0px; border-color: #ed8936">
                        <div class="single-gallery">
                            <div
                            class="gallery-img"
                            style="background-image: url(/img/menu-3.jpg);"
                            ></div>
                            <div class="g-caption">
                                <h1><strong>Profile</strong></h1>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="w-1/2">
                    <div v-on:click="signout()" class="gallery-box" style="cursor: pointer">
                        <div class="single-gallery" style="border-width: 2.5px 0px 0px 2.5px; border-color: #ed8936">
                            <div
                            class="gallery-img"
                            style="background-image: url(/img/menu-4.jpg);"
                            ></div>
                            <div class="g-caption">
                                <h1><strong>Sign Out</strong></h1>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {    
    signout() {
        window.localStorage.removeItem("Credentials")
        location.reload()
    }
  }
}
</script>
