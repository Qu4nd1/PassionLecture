<script setup>
import { getBook } from '@/services/BookService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const book = ref(null)

onMounted(async () => {
  try {
    const response = await getBook(route.params.id)
    book.value = response.data
  } finally {
  }
})
</script>

<template>
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Détail du livre - Bibliothèque</title>
    </head>
    <body>
      <main class="page">
        <a class="back" href="catalogue.html">← Retour</a>
        <div class="detail-layout">
          <div>
            <div class="cover">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop&auto=format"
                alt="La Promesse de l'Aube"
              />
            </div>
            <a
              class="btn-outline"
              style="width: 100%; justify-content: center; margin-top: 1rem"
              href="#"
              >Lire un extrait</a
            >
          </div>
          <div>
            <span class="genre-pill">Roman</span>
            <h1 class="detail-title">La Promesse de l'Aube</h1>
            <p class="author">Romain Gary</p>
            <p class="description">
              Un portrait bouleversant de l'amour maternel et de la quête d'un idéal impossible.
              Romain Gary retrace son enfance tumultueuse en Europe et sa relation extraordinaire
              avec sa mère.
            </p>
            <dl class="meta">
              <div>
                <dt>Date de parution</dt>
                <dd>Mars 1960</dd>
              </div>
              <div>
                <dt>N° de pages</dt>
                <dd>378</dd>
              </div>
              <div>
                <dt>Éditeur</dt>
                <dd>Gallimard</dd>
              </div>
              <div>
                <dt>Catégorie</dt>
                <dd>Roman</dd>
              </div>
            </dl>
          </div>
        </div>
        <section>
          <div class="comments-header">
            <h2>Commentaires (2)</h2>
            <span>★★★★★ 4.5 / 5</span>
          </div>
          <article class="comment-item">
            <div class="comment-top">
              <div class="avatar">J</div>
              <strong>Jean Paul Dupond</strong><span class="date">12 sept. 2026</span>
            </div>
            <p>Un chef-d'œuvre absolu. L'un des plus beaux livres de la littérature française.</p>
          </article>
          <article class="comment-item">
            <div class="comment-top">
              <div class="avatar">G</div>
              <strong>Géraldine Grégoire</strong><span class="date">8 sept. 2026</span>
            </div>
            <p>Émouvant et universel. Le portrait de la mère est d'une justesse bouleversante.</p>
          </article>
          <div class="comment-form">
            <h3>Laisser un avis</h3>
            <form>
              <div>
                <label class="field-label">Votre note</label
                ><select class="field-select">
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                  <option>0</option>
                </select>
              </div>
              <div>
                <label class="field-label">Votre commentaire</label
                ><textarea
                  class="field-textarea"
                  rows="3"
                  placeholder="Partagez votre avis sur ce livre…"
                ></textarea>
              </div>
              <button class="btn-rust">Publier</button>
            </form>
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
.detail-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}
.detail-title {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 2.75rem;
  line-height: 1.1;
  margin: 0.75rem 0 0.5rem;
}
.description {
  color: var(--color-ink-light);
  line-height: 1.75;
  margin: 1.5rem 0;
}
.meta {
  border-top: 1px solid var(--color-border);
}
.meta div {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-border);
}
.meta dt {
  color: var(--color-dust);
}
.meta dd {
  margin: 0;
}

.comments-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}
.comments-header h2 {
  font-family: var(--font-display);
  font-weight: 400;
}
.comment-item {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--color-border);
}
.comment-top {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--color-wash);
}
.date {
  color: var(--color-dust);
  font-size: 0.8125rem;
}
.comment-item p {
  color: var(--color-ink-light);
  line-height: 1.6;
}
.comment-form {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.4rem;
}
.comment-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 700px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }
  .detail-layout > div:first-child {
    max-width: 180px;
  }
}
</style>
