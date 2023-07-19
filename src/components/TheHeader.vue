<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="container">
      <a href="#">LOGO</a>

      <nav>
         <ul>
          <router-link :to="{name: 'home'}" tag="li">Home</router-link>
          <router-link :to="{name: 'login'}" tag="li">Login</router-link>
          <router-link :to="{name: 'register'}" tag="li">Register</router-link>
          <router-link :to="{name: 'dsahboard'}" tag="li">Dashboard</router-link>
         </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

header {
  background: #000;
  color: #fff;
}

header .container {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
}

header ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

header ul a {
  padding: 10px;
  outline: none;
  text-decoration: none;
}

</style>
