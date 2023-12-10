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
		<div class="modal" :class="{ 'show': showModal }" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Reservation Details</h5>
					<button type="button" class="close" @click="closeModal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
  <form>
    <table v-if="selectedAmenity" class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ selectedAmenity.name }}</td>
          <td>{{ selectedAmenity.category }}</td>
          <td>{{ selectedAmenity.price }}</td>
        </tr>
        <tr>
          <td colspan="2">
            <label for="customerName">Customer Name:</label>
            <input type="text" id="customerName" v-model="customerName" class="form-control">
          </td>
          <td colspan="2">
            <label for="reservationPrice">Contact:</label>
            <input type="text" id="reservationPrice" v-model="reservationPrice" class="form-control">
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label for="customerEmail">Email:</label>
            <input type="email" id="customerEmail" v-model="customerEmail" class="form-control">
          </td>
          <td colspan="2">
            <label for="customerAddress">Address:</label>
            <input type="text" id="customerAddress" v-model="customerAddress" class="form-control">
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
					<button type="button" class="btn btn-primary" @click="confirmReservation">Confirm Reservation</button>
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
selectedAmenity: null,
showModal: false,
customerName: '', // New field for customer name
reservationContact: '' // New field for reservation price
};
},
mounted() {
this.fetchAmenities();
},
methods: {
async fetchAmenities() {
try {
	const response = await axios.get("amenitiesgetData");
	this.amenities = response.data;
} catch (error) {
	console.error("Error fetching amenities:", error);
}
},
reserveAmenity(amenityId) {
this.selectedAmenity = this.amenities.find(amenity => amenity.id === amenityId);
this.showModal = true;
},
closeModal() {
this.showModal = false;
},
confirmReservation() {
if (this.selectedAmenity && this.reservationContact && this.customerName && this.reservationPrice) {
	console.log('Reservation confirmed for:', this.selectedAmenity.name);
	console.log('Customer Name:', this.customerName);
	console.log('Price:', this.reservationPrice);
	this.showModal = false;
	// Further logic for reservation confirmation
} else {
	console.error('Please fill in all fields.');
}
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
  .modal {
			display: none;
			position: fixed;
			z-index: 999;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: auto;
			background-color: rgba(0, 0, 0, 0.4);
			}

			.modal.show {
			display: block;
			}
			.btn btn-secondary{

			 margin-left: 110px;
			}
  </style>
  