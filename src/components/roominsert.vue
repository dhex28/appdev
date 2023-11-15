<template>
    <div>
      <form @submit.prevent="save">
        <label for="name">Name</label>
        <input type="text" placeholder="name" v-model="name"><br>
        <label for="description">Description</label>
        <input type="text" placeholder="description" v-model="description"><br>
        <label for="price">Price</label>
        <input type="text" placeholder="price" v-model="price"><br>
        <label for="capacity">Capacity</label>
        <input type="text" placeholder="capacity" v-model="capacity"><br>
        <label for="num_bed">Number of Bed</label>
        <input type="text" placeholder="num_bed" v-model="num_bed"><br>
        <label for="roomImage">Room Image</label>
        <input type="file" accept="image/*" @change="handleImageUpload" required><br>

        <button type="submit">Submit</button>
        </form>
    </div>
    </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: "",
        description: "",
        price: "",
        capacity: "",
        num_bed: "",
        roomImage: null,
      };
    },
    methods: {
    async save() {
      try {
        // Save the image to the database as Base64
        const base64Image = await this.getBase64Image(this.roomImage);

        // Save the room data to the database
        const room = await axios.post("save", {
          name: this.name,
          description: this.description,
          price: this.price,
          capacity: this.capacity,
          num_bed: this.num_bed,
          room_image: base64Image, // Save the base64 encoded image
        });

        console.log("Room saved successfully:", room);

        // Clear the form after successful submission
        this.name = "";
        this.description = "";
        this.price = "";
        this.capacity = "";
        this.num_bed = "";
        this.roomImage = null;

        // Refresh the data in the admin view
        this.$emit("refreshData");
      } catch (error) {
        console.error("Error saving room:", error);
        // You can display an error message to the user
      }
    },

    handleImageUpload(event) {
      this.roomImage = event.target.files[0];
    },
    getBase64Image(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    },
  },
  };
  </script>
  