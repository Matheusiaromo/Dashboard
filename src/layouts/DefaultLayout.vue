<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
    <TheHeader />
    <main>
      <slot></slot>
    </main>
    <TheFooter />
</template>

<style>

#app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh + 20px);
  }
  
  main {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
  }

  input {
    border: none;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #000;
  }

  .btn {
    padding: 15px 20px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .btn:disabled {
    background-color: #616161;
  }

  @media (max-width: 1180px) {
    .container {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

</style>
