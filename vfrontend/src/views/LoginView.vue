<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center">Login</h5>

            <v-sheet width="300" class="mx-auto">
              <v-form fast-fail @submit.prevent="login">
                <div v-if="message === 'error'" class="alert alert-danger">Invalid response</div>
                <div v-if="message === 'fillUsername'" class="alert alert-warning">Fill in the username</div>
                <div v-if="message === 'fillPassword'" class="alert alert-warning">Fill in the password</div>
                <div v-if="message === 'fillBoth'" class="alert alert-warning">Fill in both username and password</div>
                <div v-if="message === 'wrongCredentials'" class="alert alert-warning">Your username or password is incorrect</div>

                <v-text-field v-model="username" label="Username"></v-text-field>
                
                <!-- Password field with checkbox to toggle visibility -->
                <v-text-field
                  v-model="password"
                  :label="showPassword ? 'Password' : 'Password'"
                  :type="showPassword ? 'text' : 'password'"
                ></v-text-field>

                <v-checkbox v-model="showPassword" label="Show Password"></v-checkbox>

                <v-btn type="submit" block class="mt-2 btn btn-dark">Submit</v-btn>
                <router-link to="/register" class="d-block text-center mt-2">Register</router-link>
              </v-form>
            </v-sheet>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      message: null, // Change from array to null for better handling
      showPassword: false,
    };
  },
  methods: {
    async login() {
      try {
        if (!this.username.trim() && !this.password.trim()) {
          this.message = "fillBoth";
          return;
        }

        if (!this.username.trim()) {
          this.message = "fillUsername";
          return;
        }

        if (!this.password.trim()) {
          this.message = "fillPassword";
          return;
        }

        const data = await axios.post("api/login", {
          username: this.username,
          password: this.password
        });

        if (data.data.msg === 'okay') {
          sessionStorage.setItem("jwt", data.data.token);
          router.push('/admin');
        } else {
          this.message = "wrongCredentials";
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error if needed
      }
    },
  },
};
</script>
