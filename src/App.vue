<template>
  <div id="app">
    <s-header></s-header>
    <sudoku-grid></sudoku-grid>
    <dashboard></dashboard>
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
