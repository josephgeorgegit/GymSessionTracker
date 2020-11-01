<template>
  <div class="home">
    <h1>This is the Sign Up/Sign In Page</h1>
    <v-btn>Sign Up</v-btn>
    <v-btn to="/signin">Sign In</v-btn>
    <v-btn to="/buildworkout">Add a session</v-btn>

    <div v-if="finishedWorkouts">
      <h2>Recent Workouts</h2>
      <!-- {{finishedWorkouts}} -->
      <div v-for="workout in finishedWorkouts" :key="workout.id">
        <p>{{workout.name}}</p>
        <p v-for="(q, index) in workout.data.workout" :key="index">___{{q.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Home',
  data(){
    return{
          finishedWorkouts: null
        }
  },
  created(){
    let allData = []
    db.collection("FinishedWorkouts").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        allData.push({name: doc.id, data:doc.data()})
    })
    })
    this.finishedWorkouts = allData
  },
  methods: {
  }
}
</script>
