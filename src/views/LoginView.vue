<template>
  <section>
    <div class="container">
      
        <form>
          <h1>Acesse a sua conta:</h1>
          <input type="email" v-model="form.username" placeholder="Digite seu e-mail">
          <input type="password" v-model="form.password" placeholder="Digite sua senha">
          <button @click.prevent="login" :disabled="isLoading" class="btn">Entrar</button>
          <ErroForms :erros="erros"/>
        </form>

        <p>Ainda não possui cadastro? <router-link :to="{ name: 'register' }">Criar uma conta</router-link></p>
      
    </div>
  </section>
</template>


<script setup lang="ts">

  import { reactive, ref } from 'vue'
  import { api }  from '../services/https.js'
  import ErroForms from '@/components/ErroForms.vue'

  let erros: Array<string> = reactive([])
  const isLoading = ref(false);

  const form = reactive({
    username: "",
    password: ""
  })

  async function login() {

    //zera o array
    erros.splice(0, erros.length);
    isLoading.value = true

    try {

      const {data} = await api.post("/wp-json/jwt-auth/v1/token", form)

      console.log(data)
    } catch (error) {
      console.log(error.response.data.message)
      erros.push(error.response.data.message)
      isLoading.value = false
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
