<script setup lang="ts">
// import { scrollToTop } from '@/utils/scrollToId'
</script>

<template>
  <header>
    <div class="menu">
      <h2 class="logo">MNTM</h2>
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
    <div class="mobile-menu">
      <h2 class="logo">MNTM</h2>
      <div class="burger"><span></span><span></span><span></span></div>
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
}

.mobile-menu {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 60px 30px;
}

.burger {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
}

.burger span {
  display: block;
  height: 4px;
  width: 40px;
  background-color: white;
}

.mask {
  width: 100%;
  height: 150px;
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

@media (max-width: 1024px) {
  .menu {
    display: none;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
