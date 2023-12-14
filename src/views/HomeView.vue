<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue'
import HeroTop from '@/components/HeroTop.vue'
import PaginationLayer from '@/components/PaginationLayer.vue'
import image1 from '@/assets/01.jpg'
import image2 from '@/assets/02.jpg'
import image3 from '@/assets/03.jpg'
</script>

<template>
  <main >
<div class="background">
  <img class="picture" src="../assets//background.jpg" alt="mountain">
  <div class="mask"></div>
</div>
    <PaginationLayer />
    <HeroTop id="start" />
    <ArticleCard
      number="01"
      section-name="get started"
      title="What level of hiker are you?"
      description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
      :image-url="image1"
      id="chapter1"
    />
    <ArticleCard
      number="02"
      section-name="Hiking Essentials"
      title="Picking the right Hiking Gear!"
      description="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
      :image-url="image2"
      :reverse-mode="true"
      id="chapter2"
    />
    <ArticleCard
      number="03"
      section-name="where you go is the key"
      title="Understand Your Map & Timing"
      description="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
      :image-url="image3"
      id="chapter3"
    />
  </main>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  z-index: -10;
}.picture{
  width: 100%;
  height: 100%;
  object-fit: cover;
} 

.mask {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
    
  background: linear-gradient(#0b1d2600,#0b1d26) ;
}
</style>


