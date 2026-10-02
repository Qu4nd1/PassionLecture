<script setup>
const props = defineProps({
  myBooks: Array,
})

const emits = defineEmits(['handle-delete', 'handle-update'])
function goToUpdate(id) {
    emits('handle-update', id)
}
function handleDelete(myBook) {
  emits('handle-delete', myBook)
}
</script>
<template>
  <div class="card-grid">
    <article class="card" v-for="myBook in myBooks" :key="myBook.id">
      <RouterLink class="cover" :to="{ name: 'book-detail', params: { id: myBook.id } }">
        <img :src="myBook.coverImage" :alt="myBook.title" />
      </RouterLink>
      <div class="card-info">
        <p class="title">{{ myBook.title }}</p>
        <p class="author">{{ myBook.writerSurname }} {{ myBook.writerName }}</p>
        <span class="genre-pill">{{ myBook.categorie }}</span>
      </div>
      <div class="card-actions">
        <button class="btn-ghost" @click="goToUpdate(myBook.id)">Modifier</button>
        <button class="btn-rust" @click="handleDelete(myBook)">Supprimer</button>
      </div>
    </article>
  </div>
</template>
<style scoped>
.btn-rust,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.25rem;
  font: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  text-decoration: none;
}
.btn-rust {
  background: var(--color-rust);
  color: var(--color-surface);
  border: none;
}
.btn-ghost {
  background: var(--color-wash);
  color: var(--color-ink-light);
  border: none;
}
.genre-pill {
  font-size: 0.75rem;
  color: var(--color-rust);
  background: #b5452a11;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
}
.cover {
  display: block;
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

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
}
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.4rem;
  overflow: hidden;
}
.card-info {
  padding: 1rem;
}
.card-info .title {
  font-family: var(--font-display);
  margin: 0 0 0.25rem;
}
.card-info .author {
  margin: 0 0 0.65rem;
  font-size: 0.8125rem;
}
.card-actions {
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
}
</style>
