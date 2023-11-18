<template>

<footer class="footer">
		<div class="footer-container">
			<nav class="footer-nav">
				<div class="footer-description">
					<h3 class="footer-description-title">Veronica INN</h3>
					<p>Hospitality and Comfort are our watchwords</p>
				</div>
				<div class="footer-contact-us">
					<h3 class="footer-description-title">Contact Us</h3>
					<p class="footer-description-detail"> 
						<img :src="require('@/assets/img/map-pin.svg')" class="footer-description-icon" alt="star hotel location">

						<span>Talipanan Puerto Galera</span></p>
					<p class="footer-description-detail">
						<img :src="require('@/assets/img/phone.svg')" class="footer-description-icon" alt="star hotels phone number"> 
						<span>
					 08185956620</span></p>
					<p class="footer-description-detail">
						<img :src="require('@/assets/img/mail.svg')" class="footer-description-icon" alt="star hotels email">
						<span>support@Veronica INN.com</span> </p>
				</div>
				<div class="footer-follow-us">
					<h3 class="footer-description-title">Follow Us</h3>
					<ul class="footer-follow-us-lists">
						<li class="follow-us-list">
							<a href="">
								<img :src="require('@/assets/img/facebook.svg')" alt="star hotels facebook page">
							</a>
						</li>
						<li class="follow-us-list">
							<a href="">
								<img :src="require('@/assets/img/twitter.svg')" alt="star hotels twitter page">
							</a>
						</li>
						<li class="follow-us-list">
							<a href="">
								<img :src="require('@/assets/img/instagram.svg')" alt="star hotels instagram page">
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</footer>

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



    @import '../assets/css/global-footer.css';
    @import '../assets/css/index.css';

</style>