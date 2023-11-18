<template>
    <div class="jumbotron-container">
        <div class="jumbotron-left">
            <h2 class="jumbotron-header">Discover the perfect balance <br> of hospitality, luxury and <br>comfort.</h2>
            <p>We are focused on providing clients with the highest level<br>
                of comfort and excellent affordable rates</p>
            <a href="https://www.booking.com/hotel/ph/veronicas-inn-calapan.en-gb.html?aid=304142&label=fac419jc-1FCAEoggI46AdIM1gDaLQBiAEBmAEJuAEXyAEM2AEB6AEB-AEDiAIBqAIDuALsyeCqBsACAdICJGU4Y2Y4OTQ3LTRhZWMtNDViNC1hN2NkLTM3YmUzNzE1NTg0NNgCBeACAQ&sid=27fe8b9ca4edcfcfefacfa7663f9f561&all_sr_blocks=1089397802_381850064_0_1_0;checkin=2023-11-18;checkout=2023-11-19;dest_id=5826;dest_type=region;dist=0;group_adults=2;group_children=0;hapos=3;highlighted_blocks=1089397802_381850064_0_1_0;hpos=3;matching_block_id=1089397802_381850064_0_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=1089397802_381850064_0_1_0__300000;srepoch=1700271877;srpvid=88771354f5b4011d;type=total;ucfs=1&#hotelTmpl" class="btn btn-fill btn-large">Book Now</a>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');

@import '../assets/css/accesibility.css';
@import '../assets/css/index.css';

.btn {
    color: rgb(255, 255, 255);
    background-color: #abab15; /* Button background color */
    padding: 10px 0px; /* Adjust padding as needed */
    border-radius: 5px; /* Add rounded corners */
    text-decoration: none; /* Remove default link underline */
    display: inline-block;
    transition: background-color 0.3s ease; /* Add smooth transition effect */
}
.btn-large {
    font-size: 18px; /* Adjust font size as needed */
}
</style>
