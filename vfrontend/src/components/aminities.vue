<template>
	<main>
		<div class="container">
			<!-- Top Text -->
			<div class="page-header-container">
				<h2 class="page-header"> Book Now </h2>
				<hr />
			</div>
			<!-- Upper Section -->
			<section class="upper-section">
				<div class="container-fluid">
					<form @submit.prevent="save" class="card p-4">
						<div class="mb-3">
							<label for="name" class="form-label">Name</label>
							<input type="text" placeholder="Name" v-model="name" class="form-control">
						</div>
						<div class="mb-3">
							<label for="category" class="form-label">Category</label>
							<select v-model="category" class="form-control">
								<option value="event">Event</option>
								<option value="activity">Activity</option>
							</select>
						</div>

						<div class="mb-3">
							<label for="price" class="form-label">Price</label>
							<input type="text" placeholder="Price" v-model="price" class="form-control">
						</div>

						<div class="mb-3">
							<label for="capacity" class="form-label">Capacity</label>
							<input type="number" placeholder="Capacity" v-model="capacity" class="form-control">
						</div>

						<div class="mb-3">
							<label for="avail_data" class="form-label"> Available Date</label>
							<input type="text" placeholder=" Available Date" v-model="avail_data" class="form-control">
						</div>

						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
			</section>
			<!-- Other Facilities Section -->
			<div class="up">
				<h2 class="page-header">Other Facilities</h2>
				<hr />
			</div>

			<!-- Facilities Gallery -->
			<div class="container">
				<div class="containera">

					<div class="gallery">

						<div class="gallery-item">
							<img class="gallery-image" :src="require('@/assets/img/gymnasium.webp')" alt="gym">
							<h4>
								GYMNASIUM
							</h4>
							<p class="imggrid">
								We have the most equipped gymnasium in the country with an instructor
								always available.
							</p>
						</div>

						<div class="gallery-item">
							<img class="gallery-image" :src="require('@/assets/img/helipad.webp')" alt="helipad">
							<h4>HELIPAD</h4>
							<p class="imggrid">
								Access to the state of the art helipad coupled with pilots with over
								ten years experience.
							</p>
						</div>
						<div class="gallery-item">
							<img class="gallery-image" :src="require('@/assets/img/restaurants.webp')" alt="restaurants">
							<h4>RESTAURANTS</h4>
							<p class="imggrid">
								We have the best local and intercontinental dishes you have ever
								tasted before in our hotel.
							</p>
						</div>
						<div class="gallery-item">
							<img class="gallery-image" :src="require('@/assets/img/swimming_pool.webp')" alt="swim">
							<h4>SWIMMING POOLS</h4>
							<p class="imggrid">
								We have the best equipped swimming pool in the country with an
								instructor waiting to guide you
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
	
	
<script>
export default {
	mounted() {
		this.initializeHamburgerToggle();
	},
	methods: {
		initializeHamburgerToggle() {
			const ul = document.querySelector('.header-nav-lists');
			const hamburger = document.querySelector('.header-hamburger-icon');

			hamburger.addEventListener('click', () => {
				ul.classList.toggle('show');
				hamburger.classList.toggle('show');
			});
		}
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