<script setup>
const props = defineProps({
  book: Object,
  rating: Number,
})
</script>
<template>
  <RouterLink class="book" :to="{ name: 'book-detail', params: { id: book.id } }">
    <div class="cover">
      <img :src="book.coverImage" :alt="book.title" />
    </div>
    <p class="title">{{ book.title }}</p>
    <p class="author">{{ book.writerName }} {{ book.writerSurname }}</p>
    <p class="rating">★ {{ rating }}</p>
  </RouterLink>
</template>
<style>
.cover {
  aspect-ratio: 5/7;
  overflow: hidden;
  background: var(--color-wash);
}
.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.author,
.rating {
  color: var(--color-dust);
}
</style>
<style scoped>
.book {
  text-decoration: none;
}
.book .title {
  font-family: var(--font-display);
  margin: 0.65rem 0 0.2rem;
}
.book .author,
.book .rating {
  margin: 0;
  font-size: 0.8125rem;
}
.book .rating {
  color: var(--color-rust);
  margin-top: 0.25rem;
}
</style>
