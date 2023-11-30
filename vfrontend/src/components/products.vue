<template>
    <section class="container rooms-section">
      <div class="row justify-content-center">
        <div v-for="product in products" :key="product.id" class="col-lg-4 mb-4">
          <div class="card">
            <img :src="product.product_image" alt="Product Image" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">{{ product.product_name }}</h3>
              <p class="card-text">{{ product.description }}</p>
              <div class="details-container">
              
                <p class="list-text">{{ product.quantity }} in stock</p>
              </div>
              <div class="details-container">
               
                <p class="list-text">NGN{{ product.price }}</p>
              </div>
              <div class="buttons-container">
                <a href="https://timbu.com/search?query=product" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="loading" class="col-12 text-center mt-4">Loading products...</div>
        <div v-if="error" class="col-12 text-center mt-4 text-danger">{{ error }}</div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        loading: true,
        error: null,
      };
    },
    mounted() {
      this.fetchRooms();
    },
    methods: {
      async fetchRooms() {
        try {
          const response = await axios.get("getInventory");
          this.products = response.data;
          this.loading = false;
        } catch (error) {
          console.error("Error fetching rooms:", error);
          this.loading = false;
          this.error = "Error fetching rooms. Please try again later.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>
  