<template>
    <div class="bg-gray-200" style="min-height:100vh">
        <button class="absolute z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-5 rounded-full float-right" style="margin-top:40px; margin-left: 40px">
            <i class="fas fa-backward"></i>
        </button>
        <button class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-5 rounded-full float-right" style="margin-top:110px; margin-right: 40px">
            <i class="fas fa-search"></i>
        </button>
        <button class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-5 rounded-full float-right" style="margin-top:40px; margin-right: 40px">
            <i class="fas fa-th-list"></i>
        </button>
        <button class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-5 rounded-full float-right" style="margin-top:180px; margin-right: 40px">
            <i class="fas fa-plus-circle"></i>
        </button>

        <div class="container mx-auto p-8">
            <div class="flex flex-row flex-wrap -mx-2">       
                <div v-if="newExercise" class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2 slide-in-bottom-subtitle">
                    <div class="relative bg-white rounded border">
                        <picture class="block bg-gray-200 border-b">
                            <p class="absolute left-0 bg-orange-500 text-white text-xs font-bold px-2 rounded mr-4" style="top:20px">
                                Don't forget to save!
                            </p>   
                        <img class="block" src="/img/image-placeholder.png">
                        </picture>
                        <div class="p-4">
                            <h3 class="text-lg font-bold">
                                <a class="stretched-link" href="#" title="Card 1">
                                    Card 1
                                </a>
                                <button class="absolute right-0 bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 rounded h-10 mr-4">
                                    Save
                                </button>
                            </h3>
                            <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
                                
                <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2 slide-in-bottom-subtitle">
                <div class="relative bg-white rounded border">
                    <picture class="block bg-gray-200 border-b">
                    <img class="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 2">
                    </picture>
                    <div class="p-4">
                    <h3 class="text-lg font-bold">
                        <a class="stretched-link" href="#" title="Card 2">
                        Card 2
                        </a>
                    </h3>
                    <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                </div>
                </div>
                                
                <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                <div class="relative bg-white rounded border">
                    <picture class="block bg-gray-200 border-b">
                    <img class="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 3">
                    </picture>
                    <div class="p-4">
                    <h3 class="text-lg font-bold">
                        <a class="stretched-link" href="#" title="Card 3">
                        Card 3
                        </a>
                    </h3>
                    <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                </div>
                </div>
                                
                <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                <div class="relative bg-white rounded border">
                    <picture class="block bg-gray-200 border-b">
                    <img class="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 4">
                    </picture>
                    <div class="p-4">
                    <h3 class="text-lg font-bold">
                        <a class="stretched-link" href="#" title="Card 4">
                        Card 4
                        </a>
                    </h3>
                    <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                </div>
                </div>
                                
                <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                <div class="relative bg-white rounded border">
                    <picture class="block bg-gray-200 border-b">
                    <img class="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 5">
                    </picture>
                    <div class="p-4">
                    <h3 class="text-lg font-bold">
                        <a class="stretched-link" href="#" title="Card 5">
                        Card 5
                        </a>
                    </h3>
                    <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                </div>
                </div>
                                
                <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                <div class="relative bg-white rounded border">
                    <picture class="block bg-gray-200 border-b">
                    <img class="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 6">
                    </picture>
                    <div class="p-4">
                    <h3 class="text-lg font-bold">
                        <a class="stretched-link" href="#" title="Card 6">
                        Card 6
                        </a>
                    </h3>
                    <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                <div class="relative bg-white rounded border">
                    <picture class="block bg-gray-200 border-b">
                    <img class="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 6">
                    </picture>
                    <div class="p-4">
                    <h3 class="text-lg font-bold">
                        <a class="stretched-link" href="#" title="Card 6">
                        Card 6
                        </a>
                    </h3>
                    <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                </div>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                <div class="relative bg-white rounded border">
                    <picture class="block bg-gray-200 border-b">
                    <img class="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 6">
                    </picture>
                    <div class="p-4">
                    <h3 class="text-lg font-bold">
                        <a class="stretched-link" href="#" title="Card 6">
                        Card 6
                        </a>
                    </h3>
                    <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newExercise: true
        }
    }
}
</script>
