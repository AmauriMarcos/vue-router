<template>
  <div>
       <h1>User Edit</h1>
       <v-app>
         <v-container>
            <v-btn @click='voltar'>Voltar</v-btn>
         </v-container>
       </v-app>
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