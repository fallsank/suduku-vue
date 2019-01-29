<template>
  <div id="app">
    <s-header></s-header>
    <sudoku-grid ref="sudokuGrid"></sudoku-grid>
    <dashboard @startNewGame="startNewGame" @resetGame="resetGame"></dashboard>
  </div>
</template>

<script>
import SHeader from "./components/SHeader";
import SudokuGrid from "./components/SudokuGrid";
import Dashboard from "./components/Dashboard";

export default {
  name: "app",
  components: {
    SHeader,
    SudokuGrid,
    Dashboard
  },
  methods: {
    startNewGame() {
      this.$refs.sudokuGrid.$emit("startNewGame");
    },
    resetGame() {
      this.$refs.sudokuGrid.$emit("resetGame");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "微软雅黑", "consolas", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
</style>
