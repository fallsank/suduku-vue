<template>
  <div class="sudoku-container">
    <div class="sudoku-grid grid">
      <div class="row" v-for="(row, rowIndex) in matrix" :key="rowIndex">
        <span class="col" v-for="(col, colIndex) in row" :key="colIndex" ref="refCol" :style="colStyle" @click="showPopupNum">
          <template v-if="col !== 0">
            {{ col }}
          </template>
        </span>
      </div>
    </div>
    <popup-num></popup-num>
  </div>
</template>

<script>
import Generator from "./common/Generator";
import PopupNum from "./PopupNum";

export default {
  name: "sudokuGrid",
  data() {
    return {
      matrix: new Array(9).fill(new Array(9).fill(9)),
      colStyle: {}
    };
  },
  components: {
    PopupNum
  },
  mounted() {
    const colHeight = this.$refs.refCol[0].offsetWidth;
    this.colStyle = {
      height: colHeight + "px",
      lineHeight: colHeight + "px"
    };
  },
  created() {
    const gen = Generator.createInstance();
    gen.init();
    this.matrix = gen.matrix;
  },
  methods: {
    showPopupNum(evt) {
      console.log(evt);
    }
  }
};
</script>

<style lang="scss">
$popnum-cell-height: 0.8rem;
.sudoku-container {
  position: relative;

  /*全局grid样式*/
  .grid {
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

        &.confirm {
          background: lightgreen;
        }
        &.doubt {
          background: lightpink;
        }
        &.empty {
          background: #fff;
        }
      }
    }
  }

  /*数独grid样式*/
  .sudoku-grid {
    .row {
      .col {
        width: 11.1111%;
        &:first-of-type {
          border-left-width: 2px;
        }

        &:last-of-type {
          border-right-width: 2px;
        }
        &:nth-of-type(3n) {
          border-right-width: 1px;
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
      &:nth-of-type(3n) {
        .col {
          border-bottom-width: 1px;
        }
      }
    }
  }

  /*弹出面板grid样式*/
  .popup-num {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 3rem;
    padding: 0;
    .row {
      .col {
        width: 1rem;
        height: 0.8rem;
        line-height: 0.8rem;
        &:first-of-type {
          border-left-width: 1px;
        }
        &:last-of-type {
          border-right-width: 1px;
        }
      }
      &:first-of-type {
        .col {
          border-top-width: 1px;
        }
      }
      &:last-of-type {
        .col {
          border-bottom-width: 1px;
        }
      }
    }
  }
}
</style>
