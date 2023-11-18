    <template>
        <header>
            <div class="header-container">
            <nav class="header-nav-bar">
                    <div class="header-nav-logo">
                        <a href="index.html">
                            <img :src="require('@/assets/img/logo.png')"  alt="Logo">
                            
                                <div class="logout-modal" v-if="isLogoutModalOpen">
                        <div class="modal-content">
                        <p>Are you sure you want to logout?</p>
                        <div class="modal-buttons">
        <button @click="confirmLogout">Yes</button>
        <button @click="cancelLogout">Cancel</button>
        </div>
        </div>
    </div>
                        </a>
                    </div>
                    <ul class="header-nav-lists" :class="{ 'show': isMenuOpen }">
                        <li class="header-nav-list">
                            <router-link to="/home" class="header-nav-link header-active" @click="closeMenu">Home</router-link>
                        </li>
                        <li class="header-nav-list">
                            <router-link to="/rooms" class="header-nav-link" @click="closeMenu">Rooms</router-link>
                        </li>
                            <li class="header-nav-list"><router-link to="/aminities" class="header-nav-link"> Aminities </router-link></li>
                            <li class="header-nav-list"><router-link to="/aboutus" class="header-nav-link"> About Us  </router-link></li>
                            <li class="header-nav-list">
                            <router-link to="/home" class="header-nav-link" @click="confirmLogout">Logout</router-link>
                            </li>
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
        confirmLogout() {
            
            const isConfirmed = window.confirm("Are you sure you want to logout?");
            
            if (isConfirmed) {
        
            this.$router.push('/');
            }
        },
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
    
    
        @import '../assets/css/global-header.css';
        @import '../assets/css/accesibility.css';
        @import '../assets/css/index.css';
    
.logout-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #eae4e4;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal-buttons button {
  margin: 0 10px;
  padding: 8px 16px;
  cursor: pointer;
}

    
    </style>
    