<script setup>
import { getBooks } from '@/services/BookService'
import { onMounted, ref } from 'vue'

const books = ref({})

onMounted(async () => {
  try {
    const response = await getBooks()
    books.value = response.data
  } finally {
    console.log('Request completed')
  }
})
</script>

<template>
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Catalogue - Bibliothèque</title>
    </head>
    <body>
      <main class="page">
        <header class="catalog-header">
          <h1>Catalogue</h1>
          <p>8 ouvrages — 5 genres</p>
        </header>
        <div class="filters">
          <a class="active" href="#">Tous</a><a href="#roman">Roman</a
          ><a href="#sf">Science-Fiction</a><a href="#policier">Policier</a
          ><a href="#poesie">Poésie</a>
        </div>
        <section class="genre-section">
          <div class="genre-header">
            <h2>Tous les ouvrages</h2>
            <span>8 ouvrage(s)</span>
          </div>
          <div class="grid">
            <a class="book" href="livre-detail.html"
              ><div class="cover">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop&auto=format"
                  alt="La Promesse de l'Aube"
                />
              </div>
              <p class="title">La Promesse de l'Aube</p>
              <p class="author">Romain Gary</p>
              <p class="rating">★ 4.5</p></a
            ><a class="book" href="livre-detail.html"
              ><div class="cover">
                <img
                  src="https://images.unsplash.com/photo-1614544048536-0d28bb00236c?w=400&h=560&fit=crop&auto=format"
                  alt="Dune"
                />
              </div>
              <p class="title">Dune</p>
              <p class="author">Frank Herbert</p>
              <p class="rating">★ 5.0</p></a
            ><a class="book" href="livre-detail.html"
              ><div class="cover">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop&auto=format"
                  alt="Le Meurtre de Roger Ackroyd"
                />
              </div>
              <p class="title">Le Meurtre de Roger Ackroyd</p>
              <p class="author">Agatha Christie</p></a
            ><a class="book" href="livre-detail.html"
              ><div class="cover">
                <img
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=560&fit=crop&auto=format"
                  alt="Les Fleurs du Mal"
                />
              </div>
              <p class="title">Les Fleurs du Mal</p>
              <p class="author">Charles Baudelaire</p>
              <p class="rating">★ 5.0</p></a
            ><a class="book" href="livre-detail.html"
              ><div class="cover">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=560&fit=crop&auto=format"
                  alt="L'Étranger"
                />
              </div>
              <p class="title">L'Étranger</p>
              <p class="author">Albert Camus</p>
              <p class="rating">★ 5.0</p></a
            >
          </div>
        </section>
      </main>
    </body>
  </html>
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
.filters a {
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  text-decoration: none;
  color: var(--color-ink-light);
}
.filters a.active {
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
