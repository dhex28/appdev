<template>
    <div class="jumbotron-container">
		<div class="jumbotron-left">
			<h2 class="jumbotron-header">Discover the perfect balance <br> of hospitality, luxury and <br>comfort.</h2>
			<p>We are focused on providing clients with the highest level<br>
					of comfort and excellent affordable rates</p>
					<a href="https://timbu.com/search?query=hotel" class="btn btn-fill btn-large">Book Now</a>
		</div>
		
	</div>
</template>

<script>

export default {
mounted() {
    const loader = document.getElementById('loader');
    const scrollBar = document.getElementsByClassName('scroll-bar')[0];
    window.addEventListener('load', () => {
    if (loader && scrollBar) {
        loader.classList.add('none');
        scrollBar.classList.remove('scroll-bar');
    }
    });
},
};

</script>

<style>
/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="./assets/css/global-header.css">
	<link rel="stylesheet" href="./assets/css/global-footer.css">
	<link rel="stylesheet" href="./assets/css/accesibility.css">
	<link rel="stylesheet" href="./assets/css/index.css">
	<link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon"> */

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');



    @import '../assets/css/accesibility.css';
    @import '../assets/css/index.css';

</style>