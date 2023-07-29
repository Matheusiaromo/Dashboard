<script setup lang="ts">

import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

console.log(auth)

</script>

<template>
  <section>
    <div class="container">
      <h1>Bem vindo ao dashboard {{ auth.$state.usuario.nome }}</h1>
    </div>
  </section>
</template>

<style scoped>
section {
  flex: 1;
  width: 100%;
}
</style>