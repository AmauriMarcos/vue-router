<template>
    <div class="app">
       <div
          class="navbar"
          :class="{ 'navbar--hidden': !showNavbar }"
       >
          <div class="logo">
            <h2>Logo</h2>
          </div>

          <ul class="items">
              <router-link  to='/'  active-class="active" exact="/"><a>Home</a></router-link>
              <router-link  to='/user/something'  active-class="active" ><a>User</a></router-link>
          </ul>
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
        console.log(currentScrollPosition);
        if (currentScrollPosition < 0) {
          return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
   }
};
</script>

<style lang="scss" scoped>

li{
  margin-right: 15px;
  list-style: none;
  
}

a{
 text-decoration: none;
 color: white;
 padding: 1rem;
}

.active:after{
  content: "";
  display: block;
  background-color: chartreuse;
  margin: 2px;
  height: 1px;
  transform: translateY(.1rem);
}

.app {
  width: 100vw;
  height: 10vh;
}


.navbar {
  height: 60px;
  width: 100vw;
  background: hsl(273, 34%, 47%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(134, 139, 139, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  display: grid;
  grid-template: repeat(6, 1fr);
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.logo{
  grid-column: 1/3;
  grid-row: 1/2;
}

.items{
  grid-column: 2/5;
  grid-row: 1/2;
  display: flex;
}

.router-link-active{
  opacity: 1;
  visibility: visible;
}

</style>