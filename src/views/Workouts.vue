<template>
    <div class="text-gray-900 bg-gray-200" style="min-height:100vh">

        <button class="absolute z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-5 rounded-full float-right" style="margin-top:40px; margin-left: 40px">
            <i class="fas fa-backward"></i>
        </button>
        <button class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-5 rounded-full float-right" style="margin-top:40px; margin-right: 40px">
            <i class="fas fa-edit"></i>
        </button>
        <button class="absolute right-0 z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-5 rounded-full float-right" style="margin-top:110px; margin-right: 40px">
            <i class="fas fa-plus-circle"></i>
        </button>
        <!-- <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <p class="p-4">Countries</p>
            <div class="border-b-2 m-0"></div>
            <p class="p-4">Select Country: </p>
            <div class="mr-8 ml-4">
            <div class="relative">
                <button class="bg-teal p-3 rounded text-white shadow-inner w-full">
                    <span class="float-left">Show options</span>

                    <svg class="h-4 float-right fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                    <g>
                        <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                    </g>
                    </svg>
                </button>
                <div class="rounded shadow-md my-2 relative pin-t pin-l">
                    <ul class="list-reset">
                        <li class="p-2"><input class="border-2 rounded h-8 w-full"><br></li>
                        <li><p class="p-2 block text-black hover:bg-grey-light cursor-pointer">
                            USA
                            <svg class="float-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>
                        </p></li>
                        <li><p class="p-2 block text-black hover:bg-grey-light cursor-pointer">Montenegro</p></li>
                    </ul>
                </div>
            </div>
            </div>
        </div> -->
        <div class="container mx-auto p-8">

        <div class="px-3 py-4 flex justify-center">
            <table class="w-full text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr class="border-b">
                        <th class="text-left p-3 px-5">Name</th>
                        <th class="text-left p-3 px-5">Email</th>
                        <th class="text-left p-3 px-5">Role</th>
                        <th></th>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>
