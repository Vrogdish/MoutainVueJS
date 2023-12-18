<script setup lang="ts">
import SectionName from './SectionName.vue'
</script>

<template>
  <div class="hero">
    <SectionName title="A hiking guide" />
    <h1>Be prepared for the Mountains and beyond!</h1>
    <div class="scroll">
      <p>Scroll down</p>
      <img src="../assets/arrow_downward_24px.svg" alt="down" class="arrow" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 960px;
  margin: auto;
  margin-bottom: 400px;
  margin-top: 100px;
}
h1 {
  margin: 32px 0;
}
.scroll {
  display: flex;
  gap: 20px;
  align-items: center;
}

.arrow {
  animation: scrollDown 0.8s ease-in-out infinite alternate-reverse;
}

@keyframes scrollDown {
  from {
    transform: translate(0,5px);
  }
  to {
    transform: translate(0,-5px);
  }
}
</style>
