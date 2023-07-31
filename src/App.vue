<template>
    <component :is="layout">
      <RouterView />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router';

const { currentRoute } = useRouter()

const defaultLayout = "default";
const layout = computed(() => {
  return  `${currentRoute.value.meta.layout || defaultLayout}-layout`
})

</script>

<style>
</style>
