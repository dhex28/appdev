import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import rooms from '../views/RoomsView.vue'
import aminities from '../views/AminitiesView.vue'
import aboutus from '../views/AboutUsView.vue'
import AdminView from '../views/AdminView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: rooms
  },
  {
    path: '/aminities',
    name: 'aminities',
    component: aminities
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: aboutus
  },
  {
    path: '/admin',
    component: AdminView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

