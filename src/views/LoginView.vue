<template>
  <section>
    <div class="container">
      
        <form>
          <h1>Acesse a sua conta:</h1>
          <input type="email" v-model="user.username" placeholder="Digite seu e-mail">
          <input type="password" v-model="user.password" placeholder="Digite sua senha">
          <button @click.prevent="logar" :disabled="isLoading" class="btn">Entrar</button>
          <ErroForms :erros="erros"/>
        </form>

        <p>Ainda não possui cadastro? <router-link :to="{ name: 'register' }">Criar uma conta</router-link></p>
      
    </div>
  </section>
</template>


<script setup lang="ts">

import { reactive, ref } from "vue";
import ErroForms from "@/components/ErroForms.vue";
import { useAuth } from "@/stores/auth.ts";
import { api } from "@/services/api.js";
import router from "@/router";

let erros: Array<string> = reactive([]);
const isLoading = ref(false);

const auth = useAuth();

const user = reactive({
  username: "",
  password: ""
});

async function logar() {
  erros.splice(0, erros.length);
  isLoading.value = true;

  try {
    const { data } = await api.login(user);
    auth.setToken(data.token);
    auth.setUser({
      nome: data.user_display_name,
      email: data.user_email
    });

    router.push({name: "dashboard"});
  } catch (error) {
    isLoading.value = false;
    erros.push(error.response.data.message);
  }

}

</script>

<style scoped>
.container {
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  margin-top: 20px;
}

p > * {
  text-decoration: underline;
  cursor: pointer;
}

section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #000;
  margin: 0 auto;
  width: 440px;
  padding: 20px;
}

form h1 {
  margin-bottom: 10px;
  font-weight: 700;
}

@media (max-width:500px) {
  form {
    width: 100%;
  }
}
</style>
