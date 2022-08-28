<template>
  <div class="add-container">
    <h2>Add grocery</h2>
    <input v-model="content" />
    <button @click="addHandeler">Add</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Task } from "../models/Task";

export default class AddTodo extends Vue {
  @Prop() tasks!: Task[];

  content = "";

  addHandeler() {
    this.$emit("addTask", new Task(this.content, false));
    this.content = "";
  }
}
</script>

<style scoped lang="scss">
.add-container {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
