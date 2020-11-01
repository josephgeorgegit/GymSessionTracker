<template>
  <div class="signin">
      <div>
          <v-text-field 
            v-model="email" 
            placeholder="Email"></v-text-field>
          <v-text-field 
            v-model="password" 
            placeholder="Password"
            :type="'password'"
          ></v-text-field>
          <p v-if="feedback">{{feedback}}</p>
      </div>
      <v-btn @click="signIn">Sign In</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "Signin",
    data(){
        return{
            email: null,
            password: null,
            feedback: null
        }
    },
    methods:{
        signIn(){
            if(this.email && this.password){
              firebase.auth().signInWithEmailAndPassword(this.email, this.password)
              .then(cred => {console.log(cred.user)
                this.$router.push({ name: 'Home'})
              }).catch(err=> {
                this.feedback= err.message
              })
              this.feedback = null

          } else{
              this.feedback = 'Please fill in both fields'
          }
        }
    }
}
</script>

<style>

</style>