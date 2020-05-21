<template>
  <div>
    <Header></Header>
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
    /* margin-top: 3rem; */
  }
 /*  .header{
    position: fixed;
  } */
</style>