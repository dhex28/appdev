<template>
  <section class="container rooms-section">
    <div class="row justify-content-center">
      <div v-for="room in rooms" :key="room.id" class="col-lg-4 mb-4">
        <div class="card">
          <img :src="room.room_image" alt="Room Image" class="card-img-top">
          <div class="card-body">
            <h3 class="card-title">{{ room.name }}</h3>
            <p class="card-text">{{ room.description }}</p>
            <div class="details-container">
              <img :src="require('@/assets/img/check-square.svg')" alt="tick" class="list-icon">
              <p class="list-text">{{ room.capacity }} Persons</p>
            </div>
            <div class="details-container">
              <img :src="require('@/assets/img/bed.png')" alt="tick" class="list-icon">
              <p class="list-text">{{ room.num_bed }} Bed(maximum)</p>
            </div>
            <p class="card-text">₱{{ room.price }} Per Night</p>
            <div class="buttons-container">
              
              <a href="https://timbu.com/search?query=hotel" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading" class="col-12 text-center mt-4">Loading rooms...</div>
      <div v-if="error" class="col-12 text-center mt-4 text-danger">{{ error }}</div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rooms: [],
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
        const response = await axios.get("getData");
        this.rooms = response.data;
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
