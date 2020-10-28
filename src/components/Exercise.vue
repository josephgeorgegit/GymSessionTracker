<template>
  <div class="exercise">
      <div @click="add">
          <v-card class="blue lighten-5 text-center" :class="{'green lighten-4': selected}" height=100 width="100">
              <p>{{name}}</p>
          </v-card>
      
      </div>
  </div>
</template>

<script>
export default {
    name: "Exercise",
    props: ["name", "type", "id", "selected", "group"],
    data(){
        return{

        }
    },
    methods: {
        add(){
            let addToProfile = {name: this.name, type: this.type, id: this.id, group: this.group}
            this.$emit('add', addToProfile)
        }
    }
}
</script>

<style>

</style>