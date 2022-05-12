<template>
  <div>
    <h2>Finished todos</h2>
    <div v-for="(task, i) in tasks" :key="i" class="full-width">
      <div v-if="task.done == true" class="item">
        <h3>{{ task.name }}</h3>
        <p>Done!</p>
        <div class="button-container">
          <button
            @click="
              () => {
                redoHandeler(i);
              }
            "
          >
            Redo
          </button>
          <button
            @click="
              () => {
                removeHandeler(i);
              }
            "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Task } from "../models/Task";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class DoneTodoList extends Vue {
  @Prop() tasks!: Task[];

  redoHandeler(i: number) {
    this.tasks[i].done = false;
  }
  removeHandeler(i: number) {
    this.tasks.splice(i, 1);
  }
}
</script>

<style scoped lang="scss">
.button-container {
  width: 75%;
  display: flex;
  justify-content: space-evenly;

  button {
    width: 45%;
  }
}
</style>
