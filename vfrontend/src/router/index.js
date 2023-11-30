import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import rooms from '../views/RoomsView.vue'
import aminities from '../views/AminitiesView.vue'
import aboutus from '../views/AboutUsView.vue'
import AdminView from '../views/AdminView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import RoomView from '../views/RoomView.vue'
import Amenitiesadmin from '../views/Amenitiesadmin.vue'
import Dashboard from '../views/Dashboard.vue'
import InventoryAdmin from '../views/InventoryAdmin.vue'
import CategoriesAdmin from '../views/CategoriesAdmin.vue'
import Products from '../views/Products.vue'


// import Sidebar from '../views/Sidebar.vue'
// import About from '../views/About.vue'
// import Home from '../views/Home.vue'

// import UpdateRoom from '@/views/UpdateRoom.vue';
// import RoomView from '../views/RoomView.vue'
// import AdminAmenitiesView from '../views/AdminAmenitiesView.vue'
// import PaymentView from '../views/PaymentView.vue'
// import InventoryView from '../views/InventoryView.vue'





const routes = [

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  // { path: '/about', component: About },
  // { path: '/home', component: Home },

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },


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
    path: '/addroom',
    component: RoomView
  },
  {
    path: '/addamenities',
    component: Amenitiesadmin
  },

  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/inventory',
    component: InventoryAdmin
  },
  
{
  path: '/categories',
  component: CategoriesAdmin
},
  
{
  path: '/prod',
  component: Products
},

  // ... other routes
  // {
  //   path: '/update/:id',
  //   name: 'updateRoom',
  //   component: UpdateRoom,
  // },
  // {
  //   path: '/payment',
  //   component: PaymentView
  // },
  // {
  //   path: '/inventory',
  //   component: InventoryView
  // },

  // {
  //   path: '/amenities',
  //   component: AdminAmenitiesView
  // },

  // {
  //   path: '/roomview',
  //   component: RoomView
  // },

{
    path: '/main',
    component: MainView,
    meta :{requiresAuth: true}
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const isLoggedin = checkUserLogin();
  if(to.matched.some((record) =>record.meta.requiresAuth)){
  if(!isLoggedin){
    next("/login");
  }else{
    next();
  }

  }else{
    next();
  }

});

function checkUserLogin(){
  const userToken = sessionStorage.getItem("token");
  return !!userToken;
  


}


export default router

