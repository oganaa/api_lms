<template>
  <div>
      Бүртгүүлэх
      <form @submit="onSubmit">
          <input type="text" placeholder="email" v-model="newUser.email">
          <br>
          <input type="text" placeholder="password" v-model="newUser.password">
          <br>
          <input type="text" placeholder="role" v-model="newUser.role"><br>
          <br>
        <input type="submit" placeholder="role" >
        
      </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      newUser:{
        email:'',
        password:'',
        role:'',
      }
    }
  },
  methods:{
      ...mapActions("user", ["addUser"]),
    onSubmit(e){
      e.preventDefault();
      console.log('---new User',this.newUser);
      this.addUser(this.newUser);
    }
  }

}
</script>

<style>

</style>