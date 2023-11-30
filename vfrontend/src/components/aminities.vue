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
		<div class="horizontal-container">
		  <div v-for="amenity in amenities" :key="amenity.id" class="horizontal-item">
			<img class="horizontal-image" :src="amenity.amenities_image" :alt="amenity.name">
			<h2><strong>{{ amenity.name }}</strong></h2>
			<p class="horizontal-description">{{ amenity.description }}</p>
			<p><strong>Category:</strong> {{ amenity.category }}</p>
			<p><strong>Price:</strong> {{ amenity.price }}</p>
			<button @click="reserveAmenity(amenity.id)" class="btn btn-success">Reserve</button>
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
	  reserveAmenity(amenityId) {
		// Your existing code for reserving an amenity
	  },
	},
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');
  
  .horizontal-container {
	display: flex;
	flex-wrap: nowrap; /* Ensures items stay in a single row */
	overflow-x: auto; /* Enables horizontal scrolling if items exceed container width */
	margin-top: 30px; /* Adjust as needed */
  }
  
  .horizontal-item {
	flex: 0 0 300px; /* Fixed width for each item (adjust as needed) */
	box-sizing: border-box;
	padding: 0 20px; /* Adjust padding as needed */
  }
  
  .horizontal-image {
	max-width: 350px; /* Ensures the image takes the full width of the container */
	height: 250px;
  }
  
  .horizontal-description {
	font-size: 14px; /* Adjust as needed */
  }
  </style>
  