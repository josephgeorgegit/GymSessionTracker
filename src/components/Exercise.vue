<template>
  <div class="exercise">
      <div @click="add">
          <v-card class="indigo lighten-5 text-center" height=100 width="100">
              <p>{{name}}</p>
          </v-card>
      
      </div>
  </div>
</template>

<script>
export default {
    name: "Exercise",
    props: ["name", "type", "id"],
    data(){
        return{

        }
    },
    methods: {
        add(){
            let addToProfile = {name: this.name, type: this.type, id: this.id}
            this.$emit('add', addToProfile)
        }
    }
}
</script>

<style>

</style>