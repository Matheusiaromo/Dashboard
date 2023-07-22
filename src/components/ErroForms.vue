<script setup lang="ts">
  const props = defineProps({
    erros: {
      type: Array as () => Array<string>,
      default: () => [] // Define um array vazio como valor padrão
    }
  });
</script>

<template>
  <ul class="erro" v-if="props.erros.length > 0">
    <li v-for="(erro, i) in props.erros" :key="i" v-html="erro"></li>
  </ul>
</template>

<style>
.erro {
    margin-top: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.erro li {
  color: rgb(244, 76, 76);
  font-size: 12px;
}
</style>