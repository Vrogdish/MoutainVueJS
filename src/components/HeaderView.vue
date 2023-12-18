<script setup lang="ts">
import { scrollToTop } from '../utils/scrollToId'
</script>

<template>
  <header>
    <div class="menu">
      <h2 class="logo" @click="scrollToTop()">MNTM</h2>
      <nav class="navbar">
        <a href="#/">Equipment</a>
        <a href="#/">About us</a>
        <a href="#/">Blog</a>
      </nav>
      <a href="#/" class="login">
        <img src="../assets/cart.svg" alt="login" />
        <div>Account</div>
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  background: linear-gradient(180deg, rgba(11, 29, 38, 1) 0%, rgba(11, 29, 38, 0) 100%);
  height: 300px;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 80px;
  /* background: rgb(11, 29, 38); */
}

.mask {
  width: 100%;
  height: 150px;
  /* background: rgb(11, 29, 38);
  background: linear-gradient(180deg, rgba(11, 29, 38, 1) 0%, rgba(11, 29, 38, 0) 100%); */
}

.logo {
  font-size: 32px;
  letter-spacing: 0.32px;
  cursor: pointer;
}

.navbar {
  display: flex;
  gap: 60px;
}

.login {
  display: flex;
  gap: 10px;
}
</style>
