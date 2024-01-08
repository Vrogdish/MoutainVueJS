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
  <div :class="{ reverse: reverseMode}" class="card observer-root">
    <div class="content">
      <div class="number">{{ number }}</div>
      <SectionName :title="sectionName" />
      <h2>{{ title }}</h2>
      <p class="describe">{{ description }}</p>
      <p>Read more</p>
    </div>
    <div class="picture">
      <img :src="imageUrl" :alt="sectionName" />
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 300px 0px;
  margin: auto;
  display: flex;
  max-width: 1440px;
  justify-content: space-between;
  gap: 80px;
  align-items: center;
}



.reverse {
  flex-direction: row-reverse;
}

.picture {
  height: 720px;
}

.content {
  max-width: 800px;
  position: relative;
  padding-left: 200px;
  z-index: -1;
}

.describe {
  padding-top: 20px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.number {
  font-size: 240px;
  font-weight: 700;
  line-height: 240px;
  color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: -120px;
  left: 0;
}

@media (max-width: 1980px) {
  .card {
    padding: 150px 80px;
  }
  .picture {
    height: 600px;
  }

  .content {
    padding-left: 150px;
  }

  .number {
    font-size: 180px;
    text-align: right;
  }
}

@media (max-width: 1440px) {
  .picture {
    height: 400px;
  }
}

@media (max-width: 1280px) {
  .card {
    flex-direction: column;
  }

  .picture {
    height: 720px;
  }

  .content {
    padding-left: 0;
  }

  .number {
    font-size: 90px;
    
  }
}

@media (max-width: 1024px) {
  .card {
    padding: 150px 0px;
  }

  .picture {
    height: 400px;
  }
}
</style>
