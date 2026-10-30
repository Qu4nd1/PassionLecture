<script setup>
import BookCataloguePreview from '@/components/BookCataloguePreview.vue'
import { ref } from 'vue'
const props = defineProps({
  books: Array,
  genre: String,
})
</script>
<template>
  <section class="genre-section">
    <div class="genre-header">
      <h2>{{ genre }}</h2>
      <span>{{ books.length }} ouvrage(s)</span>
    </div>
    <div class="grid">
      <BookCataloguePreview v-for="book in books" :key="book.id" :book="book" :rating="rating" />
    </div>
  </section>
</template>
<style scoped>
.genre-section {
  margin-bottom: 1rem;
}
.genre-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.25rem;
}
.genre-header h2 {
  font-family: var(--font-display);
  font-weight: 400;
}
.genre-header span {
  color: var(--color-dust);
  font-size: 0.8125rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1.5rem;
}
</style>
