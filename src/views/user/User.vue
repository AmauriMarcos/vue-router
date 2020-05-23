<template>
   <div>
       <h1>User</h1>
       <hr>
       <v-btn @click='voltar'>Voltar</v-btn>
       <p>
          Loaded ID: {{id}}
       </p>
   </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    },
    watch: {
        '$route'(to, from){
            this.id = to.params.id
        }
    },
     methods: {
      voltar(){
        this.$router.push('/');
      }
    }
}
</script>

<style lang="scss">

</style>