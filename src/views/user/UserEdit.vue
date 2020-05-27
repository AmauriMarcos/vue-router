<template>
  <div>
       <h1>User Edit</h1>
       
       <v-btn @click='voltar'>Voltar</v-btn>
         
       <hr>
       <p>Locale: {{$route.query.locale}}</p>
       <p>Locale: {{$route.query.q}}</p>
   </div>
</template>

<script>
export default {
   methods: {
      voltar(){
        this.$router.push('/');
      }
    }
}
</script>

<style lang="scss">

</style>