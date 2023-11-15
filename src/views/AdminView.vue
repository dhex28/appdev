<template>
  <div>
    <roominsert @refreshData="refreshData" />
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Capacity</th>
        <th>Number of Bed</th>
        <th>Room Image</th>
      </tr>
      <tr v-for="room in rooms" :key="room.id">
        <td>{{ room.name }}</td>
        <td>{{ room.description }}</td>
        <td>{{ room.price }}</td>
        <td>{{ room.capacity }}</td>
        <td>{{ room.num_bed }}</td>
        <td v-if="room.room_image">
          <!-- Display the image using Base64 encoding -->
          <img :src="room.room_image" style="max-width: 100%; max-height: 100%;" @error="handleImageError">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import roominsert from '@/components/roominsert.vue';

export default {
  data() {
    return {
      rooms: [],
    };
  },
  components: {
    roominsert,
  },
  created() {
    this.refreshData();
  },
  methods: {
    async refreshData() {
    try {
      const response = await axios.get("getData");
      this.rooms = response.data;

      this.rooms.forEach(room => {
        console.log('Room Data:', room);
      });
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  },
    handleImageError(event) {
      console.error('Error loading image:', event.target.src);
      // Optionally, you can set a fallback image or handle the error in another way.
    },
  },
};
</script>
