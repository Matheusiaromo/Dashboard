<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  email: "",
  name: "",
  lastName: "",
  password: "",
  confirmPassword: ""
  
});

</script>

<template>
  <section>
    <div class="container">
      
        <form>
          <h1>Acesse a sua conta:</h1>
          <input type="email" v-model="form.name" placeholder="Digite seu primeiro nome">
          <input type="email" v-model="form.lastName" placeholder="Digite seu sobrenome">
          <input type="email" v-model="form.email" placeholder="Digite seu e-mail">
          <input type="password" v-model="form.password" placeholder="Digite sua senha">
          <input type="password" v-model="form.confirmPassword" placeholder="Digite sua senha novamente">
          <button class="btn">Entrar</button>
        </form>

        <p>Já possui uma conta? <router-link :to="{ name: 'login' }">Fazer login</router-link></p>
      
    </div>
  </section>
</template>

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

p {
  margin-top: 20px;
}

p > * {
  text-decoration: underline;
  cursor: pointer;
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
