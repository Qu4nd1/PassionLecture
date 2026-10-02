<script setup>
import { getBook, updateBook } from '@/services/BookService'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const userId = ref()


const title = ref()
const categorie = ref()
const numberOfPages = ref()
const extract = ref()
const summary = ref()
const writerName = ref()
const writerSurname = ref()
const editorName = ref()
const releaseYear = ref()
const coverImage = ref()

onMounted(async () => {
    const response = await getBook(id)
    const book = response.data
    userId.value = book.userId
    title.value = book.title
    categorie.value = book.categorie
    numberOfPages.value = book.numberOfPages
    extract.value = book.extract
    summary.value = book.summary
    writerName.value = book.writerName
    writerSurname.value = book.writerSurname
    editorName.value = book.editorName
    releaseYear.value = book.releaseYear
    coverImage.value = book.coverImage
})

async function submit() {
    const book = {
        id: id,
        userId: userId.value,
        title: title.value,
        categorie: categorie.value,
        numberOfPages: numberOfPages.value,
        extract: extract.value,
        summary: summary.value,
        writerName: writerName.value,
        writerSurname: writerSurname.value,
        editorName: editorName.value,
        releaseYear: releaseYear.value,
        coverImage: coverImage.value,
    }
    await updateBook(id, book)
    router.push('/myBooks')
}


</script>
<template>
    <main class="page">
    <router-link class="back" to="/myBooks">← Retour</router-link>
    <h1 class="page-title">Modifier un livre</h1>
    <div class="comment-form">
        <form @submit.prevent="submit">
        <div>
            <label class="field-label">Titre *</label><input class="field-input" v-model="title" required />
        </div>
        <div>
            <label class="field-label">Auteur *</label><input class="field-input" v-model="writerName" required />
        </div>
        <div><label class="field-label">Éditeur</label><input class="field-input" v-model="editorName" /></div>
        <div>
            <label class="field-label">Date de parution</label
            ><input class="field-input" v-model="releaseYear"/>
        </div>
        <div>
            <label class="field-label">Nombre de pages</label
            ><input class="field-input" v-model="numberOfPages" type="number" min="0" />
        </div>
        <div>
            <label class="field-label">URL de la couverture</label
            ><input class="field-input" type="url" v-model="coverImage" />
        </div>
        <div>
            <label class="field-label">Genre</label
            ><select class="field-select" v-model="categorie">
            <option>Roman</option>
            <option>Science-Fiction</option>
            <option>Policier</option>
            <option>Poésie</option>
            <option>Education</option>
            </select>
        </div>
        <div>
            <label class="field-label">Description</label
            ><textarea class="field-textarea" rows="4" v-model="summary"></textarea>
        </div>
        <div class="actions">
            <button class="btn-rust" type="submit">Modifier</button
            ><router-link class="btn-ghost" to="/myBooks">Annuler</router-link>
        </div>
        </form>
    </div>
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
</style>
