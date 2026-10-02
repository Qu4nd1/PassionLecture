import { createRouter, createWebHistory } from 'vue-router'
import BooksCatalogueView from '@/views/BooksCatalogueView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/booksFrontend',
      name: 'books',
      component: BooksCatalogueView,
    },
    {
      path: '/books/:id',
      name: 'book-detail',
      component: () => import('../views/BookDetailView.vue'),
      // props: true, // Permet de recevoir l'id directement comme une prop
    },
  ],
})

export default router
