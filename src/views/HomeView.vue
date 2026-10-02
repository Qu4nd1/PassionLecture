<script setup></script>

<template>
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Accueil - Bibliothèque</title>
    </head>
    <body>
      <main class="page">
        <section class="hero">
          <h1>Votre bibliothèque<br /><em>partagée</em></h1>
          <p>
            Bibliothèque est un espace pour partager, découvrir et discuter autour des livres qui
            nous marquent. Ajoutez vos œuvres de chevet, explorez le catalogue par genre littéraire,
            lisez les avis de la communauté et laissez vos propres commentaires.
          </p>
          <div class="actions">
            <a class="btn-primary" href="catalogue.html">Explorer le catalogue</a
            ><a class="btn-outline" href="mes-livres.html">Ajouter un livre</a>
          </div>
        </section>
        <section class="stats">
          <div><strong>8</strong><span>Ouvrages</span></div>
          <div><strong>5</strong><span>Genres</span></div>
          <div><strong>7</strong><span>Commentaires</span></div>
        </section>
        <section>
          <div class="section-header">
            <h2>Derniers ajouts</h2>
            <a href="catalogue.html">Voir tout</a>
          </div>
          <a class="book-card" href="livre-detail.html"
            ><div class="book-card-cover">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop&auto=format"
                alt="La Promesse de l'Aube"
              />
            </div>
            <div>
              <h3 class="book-card-title">La Promesse de l'Aube</h3>
              <p class="book-card-author">Romain Gary</p>
              <p class="book-card-excerpt">
                Un portrait bouleversant de l'amour maternel et de la quête d'un idéal impossible.
              </p>
              <div class="book-card-meta">
                <span class="genre-pill">Roman</span><span class="rating">★ 4.5/5</span>
              </div>
            </div>
          </a>
          <a class="book-card" href="livre-detail.html"
            ><div class="book-card-cover">
              <img
                src="https://images.unsplash.com/photo-1614544048536-0d28bb00236c?w=400&h=560&fit=crop&auto=format"
                alt="Dune"
              />
            </div>
            <div>
              <h3 class="book-card-title">Dune</h3>
              <p class="book-card-author">Frank Herbert</p>
              <p class="book-card-excerpt">
                Sur la planète désertique Arrakis, Paul Atréides voit sa famille trahie et doit
                embrasser son destin.
              </p>
              <div class="book-card-meta">
                <span class="genre-pill">Science-Fiction</span><span class="rating">★ 5.0/5</span>
              </div>
            </div>
          </a>
          <a class="book-card" href="livre-detail.html"
            ><div class="book-card-cover">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop&auto=format"
                alt="Le Meurtre de Roger Ackroyd"
              />
            </div>
            <div>
              <h3 class="book-card-title">Le Meurtre de Roger Ackroyd</h3>
              <p class="book-card-author">Agatha Christie</p>
              <p class="book-card-excerpt">
                Hercule Poirot se retrouve mêlé au meurtre de Roger Ackroyd.
              </p>
              <div class="book-card-meta">
                <span class="genre-pill">Policier</span>
              </div>
            </div>
          </a>
          <a class="book-card" href="livre-detail.html"
            ><div class="book-card-cover">
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=560&fit=crop&auto=format"
                alt="Les Fleurs du Mal"
              />
            </div>
            <div>
              <h3 class="book-card-title">Les Fleurs du Mal</h3>
              <p class="book-card-author">Charles Baudelaire</p>
              <p class="book-card-excerpt">
                Un recueil fondateur qui explore le spleen, l'idéal et la modernité.
              </p>
              <div class="book-card-meta">
                <span class="genre-pill">Poésie</span><span class="rating">★ 5.0/5</span>
              </div>
            </div>
          </a>
          <a class="book-card" href="livre-detail.html">
            <div class="book-card-cover">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=560&fit=crop&auto=format"
                alt="L'Étranger"
              />
            </div>
            <div>
              <h3 class="book-card-title">L'Étranger</h3>
              <p class="book-card-author">Albert Camus</p>
              <p class="book-card-excerpt">Un roman phare de l'absurde camusien.</p>
              <div class="book-card-meta">
                <span class="genre-pill">Roman</span><span class="rating">★ 5.0/5</span>
              </div>
            </div>
          </a>
        </section>
      </main>
    </body>
  </html>
  <RouterLink :to="{ name: 'books' }">Les livres</RouterLink>
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
