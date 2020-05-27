<template>
  <div>
    <Header></Header> 
    <div class="container">
        <transition name="slide" mode="out-in">
           <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
  *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
  }
  

  h2{
    margin-bottom: 3rem;
  }
  hr{
    margin-bottom: 2rem;
  }
  .container{
    padding: 3% 15%;
  
  }
  
   .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-out 1s easy-out forwards;
    }
    .slide-leave {
        opacity: 1;
        transform: translateX();
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }
 
    .slide-move {
        transition: transform 1s;
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-30px);
        }
    }
    @keyframes slide-in {
        from {
            transform: translateY(-30px);
        }
        to {
            transform: translateY(0px);
        }
    }
</style>