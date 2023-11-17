


<template>
    <body id="page-top">
        <div id="wrapper">
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center justify-content-center">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Admin <sup>2</sup></div>
                </a>
                <hr class="sidebar-divider my-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/dashboard">
                        <i class="fas fa-fw fa-cog"></i>
                        <span> Admin Dashboard</span></a>
                </li>

                <li class="nav-item active">
                    <a class="nav-link" href="/roomview">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Rooms</span></a>
                </li>

                <li class="nav-item active">
                    <a class="nav-link" href="/amenities">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Amenities Reservation</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Push Notification</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/payment">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Payment</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/inventory">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Inventory</span></a>
                </li>
                <hr class="sidebar-divider">
            </ul>

            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
                        <form
                            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                    aria-label="Search" aria-describedby="basic-addon2">
                            </div>
                        </form>
                    </nav>
                    <div class="container-fluid">
                        <!-- Begin Page Content -->
                        <div class="container-fluid">

                            <!-- Page Heading -->
                            <h1 class="h3 mb-2 text-gray-800"> Form Of Reservation</h1>
                            <!-- Content Row -->
                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <form>
                                            <div class="input-group form-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                                </div>
                                                <input type="text" name="image" class="form-control" placeholder=" Name">
                                            </div>
                                            <div class="form-row">
                                                <div class="col-5">
                                                    <input type="text" class="form-control" placeholder="Description">
                                                </div>
                                                <div class="col-5">
                                                    <input type="number" class="form-control" placeholder="Price">
                                                </div>
                                                <div class="col-5">
                                                    <input type="number" class="form-control" placeholder="Capacity">
                                                </div>
                                                <div class="col-5">
                                                    <input type="dropdown" class="form-control" placeholder="Number of Bed">
                                                </div>
                                                <div class="input-group form-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-file"></i></span>
                                                    </div>
                                                    <input type="file" name="image" class="form-control"
                                                        placeholder=" Room Image">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <img :src="room.room_image" style="max-width: 100%; max-height: 100%;"
                                        @error="handleImageError">
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Main Content -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Veronica's Inn</span>
                </div>
            </div>
        </footer>
        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
    </body>
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
  
  <script defer asyncsrc="public/jsadmin/sb-admin-2.min.js"></script>
  <script defer asyncsrc="public/vendor/jquery/jquery.min.js"></script> 
  <script defer asyncsrc="public/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
  <script defer asyncsrc="public/vendor/jquery-easing/jquery.easing.min.js"></script> 
  <script defer asyncsrc="public/vendor/chart.js/Chart.min.js"></script> 
  <script defer asyncsrc="public/jsadmin/demo/chart-area-demo.js"></script> 
  <script defer asyncsrc="public/jsadmin//demo/chart-pie-demo.js"></script> 