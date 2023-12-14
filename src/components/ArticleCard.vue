<script setup lang="ts">
import SectionName from './SectionName.vue'

defineProps<{
  number: string
  sectionName: string
  title: string
  description: string
  imageUrl: string
  reverseMode?: boolean
}>()


</script>

<template>
  <div :class="{ reverse : reverseMode}" class="card">
    <div class="content">
      <div class="number">{{ number }}</div>
      <SectionName :title="sectionName" />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <p>Read more</p>
    </div>
    <div class="picture">
      <img :src="imageUrl" :alt="sectionName" />
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 300px 0;
  margin: auto;
  display: flex;
  width: 1440px;
  justify-content: space-between;
  align-items: center;
}

.reverse{
  flex-direction: row-reverse;
}

.picture {
  /* position: relative; */
  width: 560px;
  height: 720px;
}

.content {
  width: 800px;
  position: relative;
  padding-left: 200px;
  z-index: -1;
}

img {
  width: 100%;
  height: 100%;
  /* position: absolute; */
  object-fit: cover;
}

.number {
  font-size: 240px;
  font-weight: 700;
  line-height: 240px;
  color: rgba(255, 255, 255, 0.20);
  position: absolute;
  top: -120px;
  left: 0;
}
</style>
