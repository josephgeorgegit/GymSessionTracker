<template>
  <div class="myexercise">
      <h2>{{name}}</h2>
      <div v-for="set in sets" :key="set.id">
            <p>{{set.name}}: {{set.total}} sets of {{set.reps}} x {{set.weight}}
              <v-btn icon @click="changeTotal(-1, set.name, set.reps, set.weight)">
                  <v-icon>
                      mdi-minus
                  </v-icon>
              </v-btn>
              <v-btn icon @click="changeTotal(1, set.name, set.reps, set.weight)">
                  <v-icon>
                      mdi-plus
                  </v-icon>
              </v-btn>
            </p> 
      </div>
      <div>
        <v-text-field v-model="reps" placeholder="Enter Repetitions"></v-text-field>
        <v-text-field v-if="type == 'weight'" v-model="weight" :placeholder="'Enter ' + type"></v-text-field>
    </div>
    <p v-if="feedback">{{feedback}}</p>
      <v-btn @click="saveSet">Save set</v-btn>
        <v-btn @click="nextExercise">Next</v-btn>
  </div>
</template>

<script>
export default {
    name: "MyExercise",
    props: ["name", "type", "id", "allExercises", "myIndex"],
    data(){
        return{
            reps: null,
            currentset: [],
            weight: null,
            sets: [],
            feedback: null
        }
    },
    methods: {
        update(){
            let data = {name: this.name, type: this.type, id: this.id, sets: this.sets}
            this.$emit("update", data)
        },
        changeTotal(calc, name, reps, weight){
            console.log(calc, name)
            for(let i=0; i<this.sets.length; i++){
                if(reps == this.sets[i].reps && weight == this.sets[i].weight && name == this.sets[i].name){
                    this.sets[i].total = this.sets[i].total + calc
                    if(this.sets[i].total < 1){
                        this.sets.splice(i, 1)
                    }
                }
            }
        },
        nextExercise(){
            console.log(this.reviewExercise)
            if(this.myIndex <= this.allExercises){
                console.log("Next Value: ", this.myIndex)
                this.$emit('update', {name: this.name, type: this.type, id: this.id, group: this.group, sets: this.currentset})
                this.currentset = []
            }
        },
        saveSet(){
            if(this.type == "bodyweight"){
                this.weight = this.type
                console.log(this.weight, "hello")
            }
            if(this.reps == null || this.weight == null){
                this.feedback = "Enter all Fields"
            }else{
            this.feedback = null
            for(let i=0; i<this.sets.length; i++){
                if(this.weight != null){
                    if(this.reps == this.sets[i].reps && this.weight == this.sets[i].weight && this.name == this.sets[i].name){
                    this.sets[i].total++
                    this.reps = null
                    this.weight = null
                    return
                }
                }else{
                    if(this.reps == this.sets[i].reps && this.name == this.sets[i].name){
                    this.sets[i].total++
                    this.reps = null
                    this.weight = null
                    return
                    }
                }
            }
            let set = {name: this.name, reps: this.reps, weight: this.weight, id: this.sets.length, total: 1}
            this.currentset.push(set)
            this.sets.push(set)
            this.reps = null
            this.weight = null
            }
        }
    }

}
</script>

<style>

</style>