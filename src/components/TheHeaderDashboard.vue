<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

let toogleMenu = ref(false)
const auth = useAuthStore()

function deslogarUsuario() {
    auth.deslogarUsuario()
}

</script>

<template>
  <header>
    <div class="container">
      <a href="#">LOGO</a>

      <nav :class="toogleMenu ? 'active' : null">
         <span class="menu-mobile" @click="toogleMenu = !toogleMenu">
          <i v-if="!toogleMenu" class="fas fa-bars"></i>
          <i v-else class="fas fa-times"></i>
         </span>
         <ul>
          <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
          <button @click="deslogarUsuario" class="btn-logout">Sair</button>
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

.btn-logout {
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
}

 .container {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
}

 ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

 ul a {
  padding: 10px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: .3s;
}

ul a:hover {
  background: #fff;
  color: #000;
  transition: .3s;
}

.menu-mobile {
  display: none;
}

@media (max-width: 768px) {
  .menu-mobile {
    display: block;
    z-index: 2;
    position: relative;
  }

  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 59px;
    right: -100vw;
    width: 100vw;
    background: #000;
    overflow: hidden;
    transition: .5s;
    gap: 0px;
    opacity: 0;
  }

  .active ul {
    right: 0;
    transition: .5s;
    opacity: 1;
  }

  ul a {
   width: 100%;
   text-align: center;
   padding: 20px;
   border-bottom: 1px solid rgb(193, 193, 193);
  }
}

</style>
