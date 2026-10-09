<script setup>
import { ref, onMounted, computed } from 'vue'
import { getBooks, getRatings } from '@/services/BookService'
import { getGenres } from '@/services/GenreService'

const books = ref([])
const genres = ref([])
const ratings = ref([])

const latestBooks = computed(() => {
  return books.value.slice(-5).reverse()
})

const avgRatings = (id) => {
  const bookRatings = ratings.value.filter(r => r.bookId === id)
  if(bookRatings.length === 0) return null
  const totalRating = bookRatings.reduce((sum, r) => sum + r.rating, 0)
  return (totalRating/ bookRatings.length).toFixed(1)
}

onMounted(async () => {
  const responseGenre = await getGenres()
  console.log(responseGenre)
  genres.value = responseGenre.data
  const responseRating = await getRatings()
  console.log(responseRating)
  ratings.value = responseRating.data
  const responseBooks = await getBooks()
  console.log(responseBooks)
  books.value = responseBooks.data
})
</script>

<template>
      <main class="page">
        <section class="hero">
          <h1>Votre bibliothèque<br /><em>partagée</em></h1>
          <p>
            Bibliothèque est un espace pour partager, découvrir et discuter autour des livres qui
            nous marquent. Ajoutez vos œuvres de chevet, explorez le catalogue par genre littéraire,
            lisez les avis de la communauté et laissez vos propres commentaires.
          </p>
          <div class="actions">
            <button class="btn-primary">
              <RouterLink :to="{ name: 'books' }">Explorer le catalogue</RouterLink>
            </button>
            <button class="btn-outline">
              <RouterLink :to="{ name: 'add-book' }">Ajouter un livre</RouterLink>
            </button>
          </div>
        </section>
        <section class="stats">
          <div><strong>{{books.length}}</strong><span>Ouvrages</span></div>
          <div><strong>{{genres.length}}</strong><span>Genres</span></div>
          <div><strong>{{ratings.length}}</strong><span>Commentaires</span></div>
        </section>
        <section>
          <div class="section-header">
            <h2>Derniers ajouts</h2>
            <RouterLink :to="{ name: 'books' }">Voir tout</RouterLink>
          </div>
          <a class="book-card" v-for="book in latestBooks" :key="book.id"
            ><div class="book-card-cover">
              <img
                :src="book.coverImage" :alt="book.title"
              />
            </div>
            <div>
              <h3 class="book-card-title">{{ book.title }}</h3>
              <p class="book-card-author">{{book.writerName}} {{ book.writerSurname }}</p>
              <p class="book-card-excerpt">{{ book.summary }}</p>
              <div class="book-card-meta">
                <span class="genre-pill">{{book.categorie}}</span><span class="rating" v-if="avgRatings(book.id)">★ {{avgRatings(book.id)}}/5</span>
              </div>
            </div>
          </a>
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

/* Navigation commune */
.nav-root {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--color-cream);
  border-bottom: 1px solid var(--color-border);
}
.nav-inner {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.25rem;
  text-decoration: none;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-ink-light);
  text-decoration: none;
  border-bottom: 1.5px solid transparent;
  padding-bottom: 2px;
}
.nav-link.active {
  color: var(--color-rust);
  border-bottom-color: var(--color-rust);
}
.nav-auth-btn {
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.375rem 1rem;
  border-radius: 0.25rem;
  border: 1.5px solid var(--color-ink);
  background: transparent;
  text-decoration: none;
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

@media (max-width: 700px) {
  .nav-inner {
    align-items: flex-start;
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex-direction: column;
  }
  .nav-links {
    gap: 0.75rem;
  }
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
.hero {
  margin-bottom: 3.5rem;
  max-width: 42rem;
}
.hero h1 {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  line-height: 1.1;
  margin: 0 0 1.25rem;
}
.hero p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-ink-light);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--color-border);
  margin-bottom: 3.5rem;
  border-radius: 0.375rem;
  overflow: hidden;
}
.stats div {
  background: var(--color-surface);
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.stats strong {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
}
.stats span {
  font-size: 0.75rem;
  color: var(--color-dust);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
}
.section-header h2 {
  font-family: var(--font-display);
  font-weight: 400;
}
.section-header a {
  font-size: 0.8125rem;
  color: var(--color-rust);
}

.book-card {
  display: flex;
  gap: 1.25rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
}
.book-card-cover {
  flex-shrink: 0;
  width: 5rem;
  height: 7rem;
  overflow: hidden;
  background: var(--color-wash);
}
.book-card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.book-card-title {
  font-family: var(--font-display);
  font-size: 1.125rem;
  margin: 0 0 0.25rem;
}
.book-card-author,
.book-card-excerpt {
  color: var(--color-dust);
}
.book-card-author {
  font-size: 0.8125rem;
  margin: 0 0 0.5rem;
}
.book-card-excerpt {
  font-size: 0.875rem;
  line-height: 1.65;
  margin: 0;
}
.book-card-meta {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
  align-items: center;
}

@media (max-width: 640px) {
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
