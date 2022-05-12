<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoList from "./components/TodoList.vue";

@Options({
  components: {
    TodoList,
  },
})
export default class App extends Vue {
  mounted() {
    document.body.classList.add("body");
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  background-image: url("../public/bg.jpg");
  background-size: cover;

  height: 100%;
}
button {
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  color: yellow;
  background-color: rgb(174, 174, 0);
}
</style>
