<script setup lang="ts">
defineProps<{
  title: String
}>()
</script>

<template>
  <div class="section-name">
    <div class="line"></div>
    <h3>
      {{ title }}
    </h3>
  </div>
</template>

<style scoped>
.line {
  width: 72px;
  height: 2px;
  background-color: #fbd784;
}

.section-name {
  display: flex;
  gap: 32px;
  align-items: center
}
</style>
