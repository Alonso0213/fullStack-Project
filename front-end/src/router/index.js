import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contactView.vue')
  },
  {
    path: '/single/:id?',
    name: 'single',
    component: () => import('../views/singleView.vue')
  },
  {
    path: "/addprod",
    name: "addprod",
    component: () => import("../views/AddView.vue")
  },
  {
    path: "/editprod/:id",
    name: "editprod",
    component: () => import("../views/EditView.vue"),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
