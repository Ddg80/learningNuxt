<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {useAuthStore} from '~/store/auth'
const router = useRouter()
const {logUserOut} = useAuthStore()
const {authenticated} = storeToRefs(useAuthStore())

const logout = () => {
  logUserOut()
  router.push('/login')
}
</script>

<template>
  <div>
    <nav class="bg-indigo-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="mt-4 sm:ml-6 sm:flex sm:items-center">
            <NuxtLink
              to="/"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Home</NuxtLink
            >
            <NuxtLink
              v-if="!authenticated"
              to="/login"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Login</NuxtLink
            >
            <NuxtLink
              v-if="!authenticated"
              to="/registration"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Registration
            </NuxtLink>
            <NuxtLink
              v-if="authenticated"
              @click="logout"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Logout
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >Contact</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
