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
                        <span>Admin Dasboard</span></a>
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
                          <h1 class="h3 mb-2 text-gray-800">Graph Season</h1>
                          <!-- Content Row -->
                          <div class="row">
                              <div class="col-xl-8 col-lg-7">
                                  <!-- Area Chart -->
                                  <div class="card shadow mb-4">
                                      <div class="card-header py-3">
                                          <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                                      </div>
                                      <div class="card-body">
                                          <div class="chart-area">
                                              <canvas id="myAreaChart"></canvas>
                                          </div>
                                          <hr>
                                          Styling for the area chart can be found in the
                                          <code>/js/demo/chart-area-demo.js</code> file.
                                      </div>
                                  </div>

                                  <!-- Bar Chart -->
                                  <div class="card shadow mb-4">
                                      <div class="card-header py-3">
                                          <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
                                      </div>
                                      <div class="card-body">
                                          <div class="chart-bar">
                                              <canvas id="myBarChart"></canvas>
                                          </div>
                                          <hr>
                                          Styling for the bar chart can be found in the
                                          <code>/js/demo/chart-bar-demo.js</code> file.
                                      </div>
                                  </div>
                              </div>

                              <!-- Donut Chart -->
                              <div class="col-xl-4 col-lg-5">
                                  <div class="card shadow mb-4">
                                      <!-- Card Header - Dropdown -->
                                      <div class="card-header py-3">
                                          <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                      </div>
                                      <!-- Card Body -->
                                      <div class="card-body">
                                          <div class="chart-pie pt-4">
                                              <canvas id="myPieChart"></canvas>
                                          </div>
                                          <hr>
                                          Styling for the donut chart can be found in the
                                          <code>/js/demo/chart-pie-demo.js</code> file.
                                      </div>
                                  </div>
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
              </div>
          </div>
          <!-- Scroll to Top Button-->
          <a class="scroll-to-top rounded" href="#page-top">
              <i class="fas fa-angle-up"></i>
          </a>
      </div>
  </body>
</template>



<script defer asyncsrc="public/jsadmin/sb-admin-2.min.js"></script>
<script defer asyncsrc="public/vendor/jquery/jquery.min.js"></script> 
<script defer asyncsrc="public/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
<script defer asyncsrc="public/vendor/jquery-easing/jquery.easing.min.js"></script> 
<script defer asyncsrc="public/vendor/chart.js/Chart.min.js"></script> 
<script defer asyncsrc="public/jsadmin/demo/chart-area-demo.js"></script> 
<script defer asyncsrc="public/jsadmin//demo/chart-pie-demo.js"></script> 