<template>
  <div id="app">
    <s-header></s-header>
    <sudoku-grid></sudoku-grid>
    <dashboard></dashboard>
    <popup-num></popup-num>
  </div>
</template>

<script>
import SHeader from "./components/SHeader";
import SudokuGrid from "./components/SudokuGrid";
import Dashboard from "./components/Dashboard";
import PopupNum from "./components/PopupNum";

export default {
  name: "app",
  components: {
    SHeader,
    SudokuGrid,
    Dashboard,
    PopupNum
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
