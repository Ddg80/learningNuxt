import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  const authStore = useAuthStore();

  if (!user.value) {
    authStore.setIsAuthenticated(false);
    return navigateTo("/login");
  }
});
