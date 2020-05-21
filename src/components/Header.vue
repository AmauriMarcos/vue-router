<template>
    <div class="app">
        <div
          class="navbar"
          :class="{ 'navbar--hidden': !showNavbar }"
          
        >
          <v-app>
            <v-tabs
              fixed-tabs
              background-color='indigo accent-2'
              dark
            >
            <v-tabs-slider color="blue-grey darken-4"></v-tabs-slider>
            <v-tab to="/">
              Home
            </v-tab>
            <v-tab to="/user">
              User
            </v-tab>
            <v-tab to="/user/detail">
              Details
            </v-tab>
            <v-tab to="/user/start">
              Start
            </v-tab>
            </v-tabs>
          </v-app>
        </div>
    </div>
</template>

<script>
export default {
   data(){
     return{
       showNavbar: true,
       lastScrollPosition: 0
     }
   },
   mounted () {
       window.addEventListener('scroll', this.onScroll)
   },
   beforeDestroy () {
       window.removeEventListener('scroll', this.onScroll)
   },
   methods:{
     onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 200) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
   }
};
</script>

<style lang="scss" scoped>

.app {
  width: 100vw;
 /*  margin-bottom: 3rem; */
 height: 15vh;
 
}

.navbar {
  height: 60px;
  width: 100vw;
  position: fixed;
/*   top: 0;
  left: 0; */
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.v-application--wrap{
  min-height: 0vh !important;
}

.theme--light.v-application{
  background: none;
}

.navbar[data-v-61dd7a3d]{
  box-shadow: none;
}
</style>