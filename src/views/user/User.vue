<template>
   <div>
       <h1>The User Page </h1>
       <button class="btn" @click='voltar'>Go to home</button>
       <hr>
       <router-view></router-view>
       <router-link 
       :to="{name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'pt_br', q: '20'}}" 
       tag='button'>
       Details</router-link> 
       <button  class="btn">Edit</button>
       <router-link :to="{name: 'userEdit', params: {id: $route.params.id}}" tag='button'>START</router-link> 
   </div>
</template>

<script>
export default {
    methods: {
      voltar(){
        this.$router.push({name: 'Home'});
      }
    }
}
</script>

<style lang="scss">
    .btn{
      padding: 3px 7px;
      border: 1px solid black;
      background-color: chocolate;
      color: white;
      border-radius: 3px;
    }
</style>