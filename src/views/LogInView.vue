<script setup></script>
<template>
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Connexion - Bibliothèque</title>
    </head>
    <body>
      <main class="auth-page">
        <div class="auth-card">
          <p class="logo">Bibliothèque</p>
          <p class="tagline">partagez ce qui vous a marqué</p>
          <form>
            <div>
              <label class="field-label">Adresse e-mail</label
              ><input type="email" class="field-input" required />
            </div>
            <div>
              <label class="field-label">Mot de passe</label
              ><input type="password" class="field-input" required />
            </div>
            <button class="btn-rust" type="submit">Se connecter</button>
          </form>
          <p style="text-align: center; margin-top: 1rem; color: var(--color-dust)">
            Pas encore de compte ? <a href="inscription.html">S'inscrire</a>
          </p>
        </div>
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
.auth-page {
  min-height: calc(100vh - 8rem);
  display: grid;
  place-items: center;
  padding: 3rem 1rem;
}
.auth-card {
  width: 100%;
  max-width: 28rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 0.5rem;
}
.logo {
  font-family: var(--font-display);
  font-size: 2rem;
  margin: 0;
  text-align: center;
}
.tagline {
  text-align: center;
  color: var(--color-dust);
  margin: 0.25rem 0 2rem;
}
.auth-card form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
