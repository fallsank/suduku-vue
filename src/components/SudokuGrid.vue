<template>
  <div class="sudoku-grid">
    <div class="row" v-for="(row, rowIndex) in matrix" :key="rowIndex">
      <span
        class="col"
        v-for="(col, colIndex) in row"
        :key="colIndex"
        ref="refCol"
        :style="colStyle"
        >{{ col }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "sudokuGrid",
  data() {
    return {
      matrix: new Array(9).fill(new Array(9).fill(9)),
      colStyle: {}
    };
  },
  mounted() {
    const colHeight = this.$refs.refCol[0].offsetWidth;
    this.colStyle = {
      height: colHeight + "px",
      lineHeight: colHeight + "px"
    };
  },
  created() {}
};
</script>

<style lang="scss">
.sudoku-grid {
  margin-top: 20px;
  padding: 10px;
  color: #000;
  width: 100%;
  box-sizing: border-box;
  background: rgb(235, 240, 240);
  font-size: 13px;
  font-weight: 500;

  .row {
    .col {
      display: inline-block;
      width: 11.1111%;
      box-sizing: border-box;
      text-align: center;
      background: #fff;
      border: 1px solid #ddd;
      border-right-width: 0;
      border-bottom-width: 0;

      &:nth-of-type(3n) {
        border-right-width: 1px;
      }

      &:first-of-type {
        border-left-width: 2px;
      }

      &:last-of-type {
        border-right-width: 2px;
      }
    }

    &:nth-of-type(3n) {
      .col {
        border-bottom-width: 1px;
      }
    }

    &:first-of-type {
      .col {
        border-top-width: 2px;
      }
    }

    &:last-of-type {
      .col {
        border-bottom-width: 2px;
      }
    }
  }
}
</style>
