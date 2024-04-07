<script setup>
const { auth } = useSupabaseClient();
const userLogout = async () => {
  await auth.signOut();
};
</script>

<template>
  <div>
    <nav class="bg-gradient-to-r from-blue-300 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="mt-4 sm:ml-6 sm:flex sm:items-center">
            <NuxtLink
              to="/"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/login"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Login</NuxtLink
            >
            <NuxtLink
              to="/registration"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Registration
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Contact</NuxtLink
            >
            <NuxtLink
              @click="userLogout"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Logout
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
