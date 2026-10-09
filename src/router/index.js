import { createRouter, createWebHistory } from 'vue-router'
import BooksCatalogueView from '@/views/BooksCatalogueView.vue'
import HomeView from '@/views/HomeView.vue'
import AddBooksView from '@/views/AddBooksView.vue'
import LogInView from '@/views/LogInView.vue'
import MyBooksView from '@/views/MyBooksView.vue'
import UpdateBookView from '@/views/UpdateBookView.vue'
import SignInView from '@/views/SignInView.vue'

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
    {
      path: '/myBooks/add',
      name: 'add-book',
      component: AddBooksView,
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView,
    },
    {
      path: '/login/signIn',
      name: 'sign-in',
      component: SignInView,
    },
    {
      path: '/myBooks',
      name: 'myBooks',
      component: MyBooksView,
    },
    {
      path: '/myBooks/update/:id',
      name: 'update-book',
      component: () => import('../views/UpdateBookView.vue'),
    }
  ],
})

export default router
