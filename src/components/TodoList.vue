<template>
  <div class="home">
    <div class="component">
      <h2>Todos</h2>
      <div v-for="(task, i) in tasks" :key="i" class="full-width">
        <div v-if="task.done == false" class="full-width">
          <div
            v-if="
              () => {
                checkIfNotDone(i);
              }
            "
            class="item"
          >
            <h3>{{ task.name }}</h3>
            <p>Not done</p>
            <button
              @click="
                () => {
                  doneHandeler(i);
                }
              "
            >
              Mark as done
            </button>
          </div>
        </div>
      </div>
    </div>
    <DoneTodoList :tasks="tasks" class="component" />
    <AddTodo @addTask="handleAddTask($event)" class="component" />
  </div>
</template>

<script lang="ts">
import { Task } from "../models/Task";
import { Options, Vue } from "vue-class-component";
import DoneTodoList from "./DoneTodoList.vue";
import AddTodo from "./AddTodo.vue";
@Options({
  components: {
    DoneTodoList,
    AddTodo,
  },
})
export default class TodoList extends Vue {
  tasks: Task[] = [
    new Task("Köpa bananer", false),
    new Task("Äta bananer", false),
    new Task("Factchecka Wikipediaartikeln om bananer", false),
  ];
  checkIfNotDone(i: number) {
    if (this.tasks[i].done == false) {
      return true;
    }
  }

  doneHandeler(i: number) {
    this.tasks[i].done = true;
  }
  handleAddTask(t: Task) {
    this.tasks.push(t);
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .component {
    width: 45%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin: 10px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 5px;

    .full-width {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border: 1px solid rgb(241, 255, 47);
      border-radius: 10px;
      width: 80%;
      margin: 0 0 20px 0;
      background-color: rgba(255, 255, 55, 0.566);

      h3 {
        width: 80%;
        text-align: center;
      }

      button {
        margin: 1em 0 1em 0;
      }
    }
  }
}
</style>
