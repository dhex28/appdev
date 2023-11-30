<!-- roominsert.vue -->
<template>
    <body>
      <!--  Body Wrapper -->
      <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
        <!-- Sidebar Start -->
        <aside class="left-sidebar">
          <!-- Sidebar scroll-->
          <div>
            <div class="brand-logo d-flex align-items-center justify-content-between">
              <a href="/admin" class="text-nowrap logo-img">
                <img :src="require('@/assets/admin/images/logos/dark-logo.svg')" />
              </a>
              <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                <i class="ti ti-x fs-8"></i>
              </div>
            </div>
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav">
                <li class="nav-small-cap">
                  <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span class="hide-menu">Home</span>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="./index.html" aria-expanded="false">
                    <span>
                      <i class="ti ti-layout-dashboard"></i>
                    </span>
                    <span class="hide-menu">Dashboard</span>
                  </a>
                </li>
                <li class="nav-small-cap">
                  <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span class="hide-menu">MENU</span>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/addroom" aria-expanded="false">
                    <span>
                      <i class="ti ti-article"></i>
                    </span>
                    <span class="hide-menu">Rooms</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/addamenities" aria-expanded="false">
                    <span>
                      <i class="ti ti-alert-circle"></i>
                    </span>
                    <span class="hide-menu">Amenities </span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/categories" aria-expanded="false">
                    <span>
                      <i class="ti ti-cards"></i>
                    </span>
                    <span class="hide-menu">Categories</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/inventory" aria-expanded="false">
                    <span>
                      <i class="ti ti-file-description"></i>
                    </span>
                    <span class="hide-menu">Inventory</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/notification" aria-expanded="false">
                    <span>
                      <i class="ti ti-typography"></i>
                    </span>
                    <span class="hide-menu">Notification</span>
                  </a>
                </li>
                <li class="nav-small-cap">
                  <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span class="hide-menu">AUTH</span>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/" aria-expanded="false">
                    <span>
                      <i class="ti ti-login"></i>
                    </span>
                    <span class="hide-menu">Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
            <!-- End Sidebar navigation -->
          </div>
          <!-- End Sidebar scroll-->
        </aside>
        <!--  Sidebar End -->
        <!--  Main wrapper -->
        <div class="body-wrapper">
          <!--  Header Start -->
          <header class="app-header">
            <nav class="navbar navbar-expand-lg navbar-light">
              <ul class="navbar-nav">
                <li class="nav-item d-block d-xl-none">
                  <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                    <i class="ti ti-menu-2"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                    <i class="ti ti-bell-ringing"></i>
                    <div class="notification bg-primary rounded-circle"></div>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
  
      
            
          <div class="container-fluid"></div>
        <div class="color-container">
          <inventoryinsert @refreshData="refreshData" />
          <insert @data-saved="getInfo" />
          <table border="1" class="table-container">
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>History</th>
                  </tr>

                <tbody>
                  <tr v-for="product in info" :key="product.id">
                    <td>{{ product.product_name }}</td>
                    <td>{{ getCategoryName(product.category_id) }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.quantity }}</td>
                    <td v-if="product.product_image">
                      <img
                        :src="product.product_image"
                        style="max-width: 100%; max-height: 100%; width: 100px; height: auto;"
                        @error="handleImageError"
                      />
                    </td>
                    <td>{{ product.status}}</td>
                    <td>
                      <button class="btn btn-outline-danger btn-sm" @click="editRecord(product.id)">Edit</button>
                    </td>
                    <td>
                      <button class="btn btn-outline-danger btn-sm" @click="showProductHistory(product.id)">Show History</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

    <!-- Add a modal for displaying product history -->
<div v-if="selectedProductHistory">
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="selectedProductHistory = null">&times;</span>
      <h3>Product History for {{ selectedProductHistory.product_name }}</h3>
      <table border="1" class="table-container">
        <tr>
          <th>Date</th>
          <th>Previous Quantity</th>
          <th>Added/Removed Quantity</th>
          <th>New Quantity</th>
        </tr>
        <tbody>
          <tr v-for="history in selectedProductHistory.history" :key="history.id">
            <td>{{ history.date }}</td>
            <td>{{ history.previous_quantity }}</td>
            <td>{{ history.added_removed_quantity }}</td>
            <td>{{ history.new_quantity }}</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


  </body>
</template>


<script>
import axios from 'axios';
import inventoryinsert from '@/components/inventoryinsert.vue';

export default {
  data() {
    return {
      info: [],
      categories: [],

    };
    
  },

  components: {
    inventoryinsert,
  },
  
  created() {
    this.getData();
    this.refreshData();
  },
  methods: {
    async refreshData() {
      try {
        const response = await axios.get("getInventory");
        this.info = response.data;

        this.info.forEach(inf => {
          console.log('Room Data:', inf);
        });
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    },
    async getData() {
      try {
        await Promise.all([this.getCategories(), this.getInfo()]);
      } catch (error) {
        console.error(error);
      }
    },
    async getInfo() {
      try {
        const response = await axios.get('getInventory');
        this.info = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getCategories() {
      try {
        const response = await axios.get('getCategory');
        this.categories = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    getCategoryName(categoryId) {
      if (!Array.isArray(this.categories)) {
        // Ensure that this.categories is an array
        this.categories = [];
      }

      const category = this.categories.find(category => category.id === categoryId);
      return category ? category.category_name : 'Unknown';
    },
    async getProductHistory(productId) {
    try {
      const response = await axios.get(`getProductHistory/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product history for ${productId}:`, error);
    }
  },
  async showProductHistory(productId) {
    const productHistory = await this.getProductHistory(productId);
    if (productHistory) {
      this.selectedProductHistory = { ...productHistory, product_id: productId };
    }
  },
  },
};
</script>
<style scoped>
.color-container {
  background-color: #f2f2f2;
  padding: 20px;
}

.table-container {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 3px 15px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin: 0 auto;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}
</style>

  