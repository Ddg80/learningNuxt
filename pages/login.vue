<script setup>
import { useAuthStore } from "~/store/auth";
import { useSessionStore } from "~/store/session";
definePageMeta({
  layout: "custom",
});
const authStore = useAuthStore();
const sessionStore = useSessionStore();
const { auth } = useSupabaseClient();
const user = useSupabaseUser();
const email = ref("");
const password = ref(null);
const errorMsg = ref("");
const successMsg = ref("");

const userLogin = async () => {
  try {
    const { error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    email.value = ''
    password.value = ''

    if (error) throw error
    authStore.setIsAuthenticated(true);
    sessionStore.setIsFirstConnect(true);
    successMsg.value = "Check your email for confirmation";
  } catch (error) {
    errorMsg.value = error.message
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
  }
};

watchEffect(() => {
  if (user.value) {
    return navigateTo('/');
  }
});
</script>

<template>
  <div
    class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
      >
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">
              Login Form
            </h1>
          </div>
          <div class="divide-y divide-gray-200">
            <form
              @submit.prevent="userLogin"
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="relative">
                <input
                  autocomplete="off"
                  v-model="email"
                  id="email"
                  name="email"
                  type="text"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                />
                <label
                  for="email"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >Email Address</label
                >
              </div>
              <div class="relative">
                <input
                  autocomplete="off"
                  v-model="password"
                  id="password"
                  name="password"
                  type="password"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                />
                <label
                  for="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >Password</label
                >
              </div>
              <div class="relative">
                <button
                  type="submit"
                  class="bg-blue-500 text-white rounded-md px-2 py-1"
                >
                  Submit
                </button>
              </div>
              <div
              v-if="errorMsg"
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium" >{{ errorMsg }}</span>
              </div>
              <div
              v-if="successMsg"
                class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span class="font-medium" >{{ successMsg }}</span>
              </div>
              <p class="mt-3 text-xs">Do you have an account yet?</p>
              <nuxt-link to="/registration">Register</nuxt-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>