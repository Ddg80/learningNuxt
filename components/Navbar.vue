<script setup>
import { useAuthStore } from "~/store/auth";
import {storeToRefs} from 'pinia'

const { auth } = useSupabaseClient();
const authStore = useAuthStore();
const router = useRouter();
const userLogout = async () => {
  authStore.setIsAuthenticated(false);
  await auth.signOut();
  router.push('/login')
};
const {getIsAuthenticated} = storeToRefs(authStore)
</script>

<template>
  <div>
    <nav class="bg-gradient-to-r from-blue-300 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="mt-4 sm:ml-6 sm:flex sm:items-center">
            <NuxtLink
              v-if="getIsAuthenticated"
              to="/"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Home</NuxtLink
            >
            <NuxtLink
              v-if="!getIsAuthenticated"
              to="/login"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Login</NuxtLink
            >
            <NuxtLink
              v-if="!getIsAuthenticated"
              to="/registration"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Registration
            </NuxtLink>
            <NuxtLink
              v-if="getIsAuthenticated"  
              to="/contact"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Contact</NuxtLink
            >
            <NuxtLink
              v-if="getIsAuthenticated"
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
