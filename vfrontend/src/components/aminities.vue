<template>
	<main>
	  <div class="container">
		<!-- amenities Section -->
		<div class="row">
		  <div class="col-12">
			<h2 class="page-header">Amenities</h2>
			<hr />
		  </div>
		</div>
  
		<!-- amenities Gallery -->
		<div class="row">
		  <div v-for="amenity in amenities" :key="amenity.id" class="col-md-4 mb-4">
			<div class="card">
			  <img :src="amenity.amenities_image" :alt="amenity.name" class="card-img-top" />
			  <div class="card-body">
				<h2 class="card-title"><strong>{{ amenity.name }}</strong></h2>
				<p class="card-text">{{ amenity.description }}</p>
				<p><strong>Category:</strong> {{ amenity.category }}</p>
				<p><strong>Price:</strong> {{ amenity.price }}</p>
				<button @click="reserveAmenity(amenity.id)" class="btn btn-success">Reserve</button>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</main>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	data() {
	  return {
		amenities: [],
	  };
	},
	mounted() {
	  this.initializeHamburgerToggle();
	  this.fetchAmenities();
	},
	methods: {
	  initializeHamburgerToggle() {
		// Your existing code for hamburger toggle
	  },
	  async fetchAmenities() {
		try {
		  const response = await axios.get("amenitiesgetData"); // Replace with your actual API endpoint
		  this.amenities = response.data;
		} catch (error) {
		  console.error("Error fetching amenities:", error);
		}
	  },
	}
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');
  </style>
  
  <style scoped>
  /* Your existing scoped styles for horizontal container */
  </style>
  