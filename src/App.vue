<template>
<div>
  <div class="header">
     <Header></Header>
  </div>
 
  <div class="container">
     <router-view></router-view>
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
  h2{
    margin-bottom: 3rem;
  }
  hr{
    margin-bottom: 2rem;
  }
  .container{
    padding: 3% 15%;
  }
 /*  .header{
    position: fixed;
  } */
</style>