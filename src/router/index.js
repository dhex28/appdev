import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import rooms from '../views/RoomsView.vue'
import aminities from '../views/AminitiesView.vue'
import aboutus from '../views/AboutUsView.vue'
import AdminView from '../views/AdminView.vue'
import RoomView from '../views/RoomView.vue'
import AdminAmenitiesView from '../views/AdminAmenitiesView.vue'
import PaymentView from '../views/PaymentView.vue'
import InventoryView from '../views/InventoryView.vue'





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
  {
    path: '/roomview',
    component: RoomView
  },
  {
    path: '/amenities',
    component: AdminAmenitiesView
  },
  {
    path: '/payment',
    component: PaymentView
  },
  {
    path: '/inventory',
    component: InventoryView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

