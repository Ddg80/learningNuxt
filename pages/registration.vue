<script setup>
definePageMeta({
  layout: "custom",
});

const { auth } = useSupabaseClient();
const toast = useToast();
const router = useRouter();
const email = ref("");
let loading = ref(false);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref("");

async function userRegister() {
  loading = true;
  if (password.value !== confirmPassword.value) {
    errorMsg.value = "Passwords do not match!"
    password.value = ""
    confirmPassword.value = ""
    setTimeout(() => {
      errorMsg.value = ""
    }, 3000)
    loading = false
    return
  }
  try {
    const {data, error } = await auth.signUp({
      email: email.value,
      password: password.value
    })
    email.value = ""
    password.value = ""
    confirmPassword.value = ""

    if (error) throw error
    if(data) {
      router.push('/login')
      toast.add({
        id: "is_register",
        title: "Information",
        description: 'Votre inscription a bien été prise en compte.',
        icon:"i-heroicons-check-circle",
        timeout: 3000,
      })
    }

  } catch (error) {
    errorMsg.value = error.message
    setTimeout(() => {
      errorMsg.value = ""
    }, 3000);
  }
}
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
            <h1 class="text-2xl font-semibold">Register Form</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <form
              @submit.prevent="userRegister"
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
                <input
                  autocomplete="off"
                  v-model="confirmPassword"
                  id="password"
                  name="password"
                  type="password"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                />
                <label
                  for="confirmPassword"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >Confirm Password</label
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
              <p class="mt-3 text-xs">Do you have an account yet?</p>
              <nuxt-link to="/login">Login</nuxt-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
