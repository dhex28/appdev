<template>
   <header>
      <div class="header-container">
         <nav class="header-nav-bar">
				<div class="header-nav-logo">
					<a href="index.html">
						<img src="https://res.cloudinary.com/joshuafolorunsho/image/upload/v1591615159/star_hotels_logo.png"
							alt="star hotels logo">
					</a>
				</div>
				<ul class="header-nav-lists" :class="{ 'show': isMenuOpen }">
                    <li class="header-nav-list">
                        <router-link to="/" class="header-nav-link header-active" @click="closeMenu">Home</router-link>
                    </li>
                    <li class="header-nav-list">
                        <router-link to="/rooms" class="header-nav-link" @click="closeMenu">Rooms</router-link>
                    </li>
                        <li class="header-nav-list"><router-link to="/aminities" class="header-nav-link"> Aminities </router-link></li>
						<li class="header-nav-list"><router-link to="/aboutus" class="header-nav-link"> About Us  </router-link></li>
						<li class="header-nav-list"><a class="header-btn header-btn-custom" href="https://timbu.com/search?query=hotel">BOOK NOW</a></li>
					</ul>
            
          <div class="header-hamburger-icon" @click="toggleMenu">
                    <div class="header-hamburger-line-1"></div>
                    <div class="header-hamburger-line-2"></div>
                    <div class="header-hamburger-line-3"></div>
                </div>
         </nav>
      </div>

     
	</header>
</template>


<style>
/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="./assets/css/global-header.css">
	<link rel="stylesheet" href="./assets/css/global-footer.css">
	<link rel="stylesheet" href="./assets/css/accesibility.css">
	<link rel="stylesheet" href="./assets/css/index.css">
	<link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon"> */

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');


    @import '../assets/css/global-header.css';
    @import '../assets/css/accesibility.css';
    @import '../assets/css/index.css';



</style>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
    },
};
</script>



