<script setup>
import { getBooks } from '@/services/BookService'
import { onMounted, ref, computed } from 'vue'
import BookCataloguePreview from '@/components/BookCataloguePreview.vue'
import { getGenres } from '@/services/GenreService'

const books = ref({})
onMounted(async () => {
  try {
    const response = await getBooks()
    books.value = response.data
  } finally {
    console.log('Request completed')
  }
})

const genres = ref([])
onMounted(async () => {
  try {
    const response = await getGenres()
    genres.value = response.data
  } finally {
    console.log('Request completed')
    createGenre()
  }
})
const genreUpdated = ref([])
function createGenre() {
  let count = 0
  genreUpdated.value.push({
    id: count,
    name: 'Tout',
    active: true,
  })
  for (let item of genres.value) {
    count++
    genreUpdated.value.push({
      id: count,
      name: item,
      active: false,
    })
  }
}
function updateActiveGenre(id) {
  for (let item of genreUpdated.value) {
    if (item.active) {
      item.active = false
    }
  }
  genreUpdated.value[id].active = true

  console.log('check done')
}
</script>

<template>
  <main class="page">
    <header class="catalog-header">
      <h1>Catalogue</h1>
      <p>{{ books.length }} ouvrages — {{ genres.length }} genres</p>
    </header>
    <div class="filters">
      <div v-for="(item, index) in genreUpdated">
        <button v-if="item.active" class="active" @click="updateActiveGenre(index)">
          {{ item.name }}
        </button>
        <button v-else @click="updateActiveGenre(index)">{{ item.name }}</button>
      </div>
    </div>
    <section class="genre-section">
      <div class="genre-header">
        <h2>Tous les ouvrages</h2>
        <span>8 ouvrage(s)</span>
      </div>
      <div class="grid">
        <BookCataloguePreview
          v-for="(book, index) in books"
          :key="book.id"
          :book="book"
          :rating="rating"
        />
      </div>
    </section>
  </main>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

:root {
  --color-cream: #f5f0e8;
  --color-parchment: #ede6d6;
  --color-ink: #1a1714;
  --color-ink-light: #3d3732;
  --color-rust: #b5452a;
  --color-rust-hover: #9e3c24;
  --color-dust: #8c7b6b;
  --color-mist: #c8bfb0;
  --color-surface: #faf7f2;
  --color-border: #d4c9b8;
  --color-wash: #e8e0d0;
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Source Sans 3', system-ui, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background: var(--color-cream);
  color: var(--color-ink);
  font-family: var(--font-body);
}
a {
  color: inherit;
}
button,
input,
textarea,
select {
  font: inherit;
}

/* Mise en page et éléments réutilisés */
.page {
  max-width: 64rem;
  margin: 0 auto;
  padding: 3.5rem 1.5rem;
}
.page-title {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 2.5rem;
  margin: 0;
}
.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.back {
  color: var(--color-rust);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2rem;
}

.btn-primary,
.btn-rust,
.btn-outline,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}
.btn-primary {
  background: var(--color-ink);
  color: var(--color-cream);
  border: none;
}
.btn-rust {
  background: var(--color-rust);
  color: var(--color-surface);
  border: none;
}
.btn-outline {
  background: transparent;
  color: var(--color-ink);
  border: 1.5px solid var(--color-ink);
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

/* Champs de formulaire communs */
.field-input,
.field-textarea,
.field-select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-mist);
  background: var(--color-cream);
  color: var(--color-ink);
}
.field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-ink-light);
  margin-bottom: 0.25rem;
}

/* Pied de page commun */
.site-footer {
  border-top: 1px solid var(--color-border);
  margin-top: 4rem;
}
.site-footer-inner {
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--color-dust);
  font-size: 0.8125rem;
}
.site-footer p {
  margin: 0;
}
@media (max-width: 640px) {
  .page {
    padding: 2rem 1rem;
  }
  .site-footer-inner {
    flex-direction: column;
  }
}
</style>
<style scoped>
.catalog-header {
  margin-bottom: 2rem;
}
.catalog-header h1 {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 2.5rem;
  margin: 0;
}
.catalog-header p {
  color: var(--color-dust);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
}
.filters div button {
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  text-decoration: none;
  color: var(--color-ink-light);
}
.filters div button.active {
  background: var(--color-ink);
  color: var(--color-cream);
  border-color: var(--color-ink);
}
.genre-section {
  margin-bottom: 3.5rem;
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
