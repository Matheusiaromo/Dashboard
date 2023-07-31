<script setup lang="ts">

import { useAuth } from '@/stores/auth';

const auth = useAuth();

</script>

<template>
  <section>
    <div class="container">
      <h1>Bem vindo ao dashboard {{ auth.$state.user.nome }}</h1>
    </div>
  </section>
</template>

<style scoped>
section {
  flex: 1;
  width: 100%;
}
</style>