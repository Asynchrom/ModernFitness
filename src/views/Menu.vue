<template>
    <div class="gallery-area">
        <div class="flex">
                <div class="w-1/2">
                    <router-link to="/exercises/">
                        <div class="gallery-box">
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
                    <div class="gallery-box">
                        <div class="single-gallery">
                            <div
                            class="gallery-img"
                            style="background-image: url(/img/menu-2.jpg);"
                            ></div>
                            <div class="g-caption">
                                <h1><strong>Workout Tracking</strong></h1>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="flex">
            <div class="w-1/2">
                <router-link to="/profile/">
                    <div class="gallery-box">
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
                    <div v-on:click="signout" class="gallery-box" style="cursor: pointer">
                        <div class="single-gallery">
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
      this.$router.replace({ name: "Home" });
    }
  }
}
</script>
