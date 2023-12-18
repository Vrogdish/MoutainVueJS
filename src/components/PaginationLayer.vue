<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { scrollToId, scrollToTop } from '../utils/scrollToId'

const step = ref(0)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case 'start':
            if (step.value !== 0) {
              step.value = 0
            }
            break
          case 'chapter1':
            if (step.value !== 1) {
              step.value = 1
            }
            break
          case 'chapter2':
            if (step.value !== 2) {
              step.value = 2
            }
            break
          case 'chapter3':
            if (step.value !== 3) {
              step.value = 3
            }
            break
          default:
            step.value = 0
        }
      }
    })
  },
  { threshold: 0.5 }
)

onMounted(() => {
  ;['start', 'chapter1', 'chapter2', 'chapter3'].forEach((chapterId) => {
    const elem = document.getElementById(chapterId)
    elem && observer.observe(elem)
  })
})
</script>

<template>
  <div class="layer">
    <div class="follow">
      <p>Follow us</p>
      <img src="../assets/instagram.svg" alt="instagram" />
      <img src="../assets/twitter.svg" alt="twitter" />
    </div>
    <div class="pagination">
      <div class="page">
        <div @click="scrollToTop()">
          <span>Start</span>
          <div class="border" :class="{ active: step === 0 }"></div>
        </div>
        <div @click="scrollToId('chapter1')">
          <span>01</span>
          <div class="border" :class="{ active: step === 1 }"></div>
        </div>
        <div @click="scrollToId('chapter2')">
          <span>02</span>
          <div class="border" :class="{ active: step === 2 }"></div>
        </div>
        <div @click="scrollToId('chapter3')">
          <span>03</span>
          <div class="border" :class="{ active: step === 3 }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layer {
  position: fixed;
  left: 0;
  right: 0;
  top: 450px;
  display: flex;
  justify-content: space-between;
  max-width: 1900px;
  margin: auto;
}

.follow {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  gap: 20px;
  margin-top: 60px;
}

.follow p {
  display: block;
  margin-left: 4px;
  width: 150px;
  transform: rotate(90deg);
}

.page {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.page div {
  display: flex;
  align-items: center;
  gap: 30px;
  height: 50px;
  cursor: pointer;
}
.border {
  margin-right: 20px;
  height: 100%;
  width: 3px;
  background-color: white;
  opacity: 0.5;
  transition: all 0.4s ease-in-out;
}

.active {
  opacity: 1;
  transition: all 0.4s ease-in-out;
}
</style>
