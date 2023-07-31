import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { api } from "@/services/api.js";
import router from "@/router";

export const useAuth = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token"));
  const user = ref(JSON.parse(localStorage.getItem("user")));

  const isAuthenticated = computed(() => {
    return token.value & user.value;
  });

  function setToken(tokenValue: string) {
    localStorage.setItem("token", tokenValue);
    token.value = tokenValue;
  }

  function setUser(userValue: object) {
    localStorage.setItem("user", JSON.stringify(userValue));
    user.value = userValue;
  }

  async function checkToken() {
    try {
      const tokenAuth = `Bearer ${token.value}`;
      const data = api.validateToken(tokenAuth);
      return data;
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  function clear() {
    user.value = [];
    token.value = "";
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push({name: "login"});
  }

  return {
    token,
    user,
    setToken, 
    setUser,
    checkToken,
    clear,
    isAuthenticated
  };
});