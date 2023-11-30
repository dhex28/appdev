<template>
	<main>
	  <div class="container">
		<!-- amenities Section -->
		<div class="up">
		  <h2 class="page-header">Amenities</h2>
		  <hr />
		</div>
  
		<!-- amenities Gallery -->
		<!-- <div class="gallery">
		  <div v-for="amenity in amenities" :key="amenity.id" class="gallery-item">
			<img class="gallery-image" :src="amenity.amenities_image" :alt="amenity.name">
			<h2><strong>{{ amenity.name }}</strong></h2>
			<p class="imggrid">{{ amenity.description }}</p>
			<p><strong>Category:</strong> {{ amenity.category }}</p>
			<p><strong>Price:</strong> {{ amenity.price }}</p>
		  </div>
		</div> -->
  
		<!-- New container for adding amenities horizontally -->
		<div class="horizontal-container">
		  <div v-for="amenity in amenities" :key="amenity.id" class="horizontal-item">
			<img class="horizontal-image" :src="amenity.amenities_image" :alt="amenity.name">
			<h2><strong>{{ amenity.name }}</strong></h2>
			<p class="horizontal-description">{{ amenity.description }}</p>
			<p><strong>Category:</strong> {{ amenity.category }}</p>
			<p><strong>Price:</strong> {{ amenity.price }}</p>
			<button @click="reserveAmenity(amenity.id)" style="background-color: #4CAF50; /* Green */
                                                   border: none;
                                                   color: white;
                                                   padding: 10px 20px;
                                                   text-align: center;
                                                   text-decoration: none;
                                                   display: inline-block;
                                                   font-size: 16px;
                                                   margin: 4px 2px;
                                                   cursor: pointer;">Reserve</button>
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
			const ul = document.querySelector('.header-nav-lists');
			const hamburger = document.querySelector('.header-hamburger-icon');

			hamburger.addEventListener('click', () => {
				ul.classList.toggle('show');
				hamburger.classList.toggle('show');
			});
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
/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="./assets/css/global-header.css">
		<link rel="stylesheet" href="./assets/css/global-footer.css">
		<link rel="stylesheet" href="./assets/css/facilities.css"> */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

@import '../assets/css/facilities.css';

</style>

<style scoped>
.horizontal-container {
  display: flex;
  flex-wrap: nowrap; /* Ensures items stay in a single row */
  overflow-x: auto; /* Enables horizontal scrolling if items exceed container width */
  margin-top: 30px; /* Adjust as needed */
}

.horizontal-item {
  flex: 0 0 200px; /* Fixed width for each item (adjust as needed) */
  box-sizing: border-box;
  padding: 0 20px; /* Adjust padding as needed */
}

.horizontal-image {
  max-width: 800px; /* Ensures the image takes the full width of the container */
  height: 200px;
}

.horizontal-description {
  font-size: 14px; /* Adjust as needed */
}
</style>