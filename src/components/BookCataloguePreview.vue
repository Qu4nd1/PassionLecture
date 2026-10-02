<script setup>
const props = defineProps({
  id: Number,
  imageCover: String,
  title: String,
  author: String,
  rating: Number,
})
</script>
<template>
  <a class="book" href="livre-detail.html"
    ><div class="cover">
      <img :src="imageCover" :alt="title" />
    </div>
    <p class="title">{{ title }}</p>
    <p class="author">{{ author }}</p>
    <p class="rating">★ {{ rating }}</p>
  </a>
</template>
<style scoped></style>
