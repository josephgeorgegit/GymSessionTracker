<template>
  <div class="selectexercise">
      <div v-if="!review">
        <div v-if="!selectFinish">
            <h2>Select exercises from this session</h2>
            <p>{{feedback}}</p>
            <div style="max-width: 100vw" class="d-flex flex-wrap">
                <h2>Chest</h2>
                <Exercise 
                v-for="e in exercises[0].chest" :key="e.id"
                :name="e.name"
                :type="e.type"
                :id="e.id"
                :selected="e.selected"
                :group="'chest'"
                @add="add"
                />
            </div>

            <div style="max-width: 100vw" class="d-flex flex-wrap">
                <h2>Back</h2>
                <Exercise 
                v-for="e in exercises[1].back" :key="e.id"
                :name="e.name"
                :type="e.type"
                :id="e.id"
                :selected="e.selected"
                :group="'back'"
                @add="add"
                />
            </div>

            <div style="max-width: 100vw" class="d-flex flex-wrap">
                <h2>Legs</h2>
                <Exercise 
                v-for="e in exercises[2].legs" :key="e.id"
                :name="e.name"
                :type="e.type"
                :id="e.id"
                :selected="e.selected"
                :group="'legs'"
                @add="add"
                />
            </div>

            <br>
            <p>Selected:</p>
            <div v-for="m in myExercises" :key="m.id">
                {{m.name}}
            </div>
        <v-btn v-if="myExercises.length > 0" @click="toSets">Next</v-btn>
        </div>


        <div v-if="selectFinish">
            <MyExercise 
                :name="myExercises[next].name"
                :type="myExercises[next].type"
                :id="myExercises[next].id"
                :allExercises="myExercises.length"
                :next="next"
                @update="update"
                />
            <v-btn @click="nextExercise">Next</v-btn>
        </div>
      </div>

    <div v-if="review">
        <p v-for="r in reviewExercise" :key="r.id">{{r.name}}</p>
    </div>
  </div>
</template>

<script>
import Exercise from '../components/Exercise.vue'
import MyExercise from '../components/MyExercise.vue'

export default {
    name: "SelectExercise",
    components:{
        Exercise,
        MyExercise
    },
    data(){
        return{
            feedback: null,
            area: null,
            next: 0,
            review: false,
            selectFinish: false,
            exercises: [
                {chest: [
                    {name: "Bench Press", type: "weight", id: 0, selected: false},
                    {name: "Incline Bench Press", type: "weight", id: 1, selected: false},
                    {name: "Decline Bench Press", type: "weight", id: 2, selected: false},
                    {name: "Skull Crushers", type: "weight", id: 3, selected: false},
                    {name: "Close Grip Bench Press", type: "weight", id: 4, selected: false},
                    {name: "Push-ups", type: "bodyweight", id: 5, selected: false},
                ]},
                {back: [
                    {name: "Lat Pulldown", type: "weight", id: 0, selected: false},
                    {name: "Pull-ups", type: "bodyweight", id: 1, selected: false},
                    {name: "Chin-ups", type: "bodyweight", id: 2, selected: false},
                    {name: "Lat Pulldown", type: "weight", id: 3, selected: false},
                    {name: "Bent Over Row", type: "weight", id: 4, selected: false},
                    {name: "Back Extensions", type: "weight", id: 5, selected: false},
                ]},
                {legs: [
                    {name: "Front Squats", type: "weight", id: 0, selected: false},
                    {name: "Back Squats", type: "weight", id: 1, selected: false},
                    {name: "Lunges", type: "weight", id: 2, selected: false},
                    {name: "Deadlifts", type: "weight", id: 3, selected: false},
                    {name: "Leg Extnesions", type: "weight", id: 4, selected: false},
                    {name: "Calf Raises", type: "weight", id: 5, selected: false},
                ]},
            ],
            myExercises: [],
            reviewExercise: []
        }
    },
    computed: {

    },
    methods: {
        add(e){
            this.feedback = null
            console.log(this.exercises[0])
            // console.log(this.exercises[this.index].chest[e.id].selected)

            if(e.group == 'chest'){
                if(this.exercises[0].chest[e.id].selected  == false){
                    this.exercises[0].chest[e.id].selected = true
                    this.myExercises.push(e)
                }else{
                this.feedback = "Already Selected!"
                }
            }
            if(e.group == 'back'){
                if(this.exercises[1].back[e.id].selected  == false){
                    this.exercises[1].back[e.id].selected = true
                    this.myExercises.push(e)
                }else{
                this.feedback = "Already Selected!"
                }
            }
            if(e.group == 'legs'){
                if(this.exercises[2].legs[e.id].selected  == false){
                    this.exercises[2].legs[e.id].selected = true
                    this.myExercises.push(e)
                }else{
                this.feedback = "Already Selected!"
                }
            }
        },
        update(e){
            console.log("update function in select", e)
            let data = {name: e.name, id: e.id, sets: e.sets, type: e.type}
            this.reviewExercise.push(data)
            // for(let i=0; i<this.reviewExercise.length; i++){
            //     if(e.name == this.reviewExercise[i].name){
            //         this.reviewExercise.splice(i, 1)
            //         this.reviewExercise.push(e)
            //     }else{
            //         this.reviewExercise.push(e)
            //     }
            // }
            console.log(this.reviewExercise)
        },
        nextExercise(){
            console.log(this.reviewExercise)
            if(this.next <= this.myExercises.length){
                this.next++
            }else{
                this.review = true
            }
        },
        toSets(){
            this.selectFinish = true
        }
    }

}
</script>

<style>

</style>