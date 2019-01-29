<template>
  <div class="sudoku-container" ref="sudokuContainer">
    <div class="sudoku-grid grid">
      <div class="row" v-for="(row, rowIndex) in matrix" :key="rowIndex">
        <span
          class="col"
          v-for="(col, colIndex) in row"
          :key="colIndex"
          ref="refCol"
          :style="colStyle"
          @click="showPopupNum(rowIndex, colIndex, col, $event)"
          :class="{ actived: rowIndex === activeCell.rowIndex && colIndex === activeCell.colIndex, sys: col.sys }"
        >
          <template v-if="col.val !== 0">
            {{ col.val }}
          </template>
        </span>
      </div>
    </div>
    <popup-num v-show="popupNumVisible" :position="popupPosition" ref="popupNum" :curr-cell="currCell" @hidePopupNum="hidePopupNum"></popup-num>
  </div>
</template>

<script>
import Generator from "./common/Generator";
import PopupNum from "./PopupNum";

export default {
  name: "sudokuGrid",
  data() {
    return {
      matrix: [],
      colStyle: {},
      popupNumVisible: false,
      popupPosition: {
        left: 10,
        top: 10
      },
      activeCell: {
        rowIndex: -1,
        colIndex: -1
      },
      currCell: null
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
    this.createSudoku();
    this.$on("startNewGame", this.startNewGame);
    this.$on("resetGame", this.resetGame);
  },
  methods: {
    // 重新开始游戏
    startNewGame(level = 5) {
      this.createSudoku(level);
    },
    // 重置游戏数据
    resetGame() {
      this.matrix = this.matrix.map(row =>
        row.map(col => {
          return {
            sys: col.sys,
            val: !col.sys ? 0 : col.val
          };
        })
      );
      console.log(this.matrix);
    },
    createSudoku(level = 5) {
      const gen = Generator.createInstance();
      gen.init();
      gen.setPuzzleMatrix(level);
      this.matrix = gen.puzzleMatrix.map(row => row.map(col => ({ val: col, status: "empty", sys: col !== 0 })));
    },
    // 弹出数字面板
    showPopupNum(rowIndex, colIndex, col, evt) {
      if (col.sys) {
        this.hidePopupNum();
        return;
      }
      this.popupNumVisible = !this.popupNumVisible;

      if (this.popupNumVisible) {
        this.currCell = col;
        this.activeCell.rowIndex = rowIndex;
        this.activeCell.colIndex = colIndex;
        this.$nextTick(() => {
          console.log(evt);
          this.setPopupNumPosition(evt.target);
        });
      } else {
        this.hidePopupNum();
      }
    },
    // 设置数字面板位置
    setPopupNumPosition($currCell) {
      const $popupNumContainer = this.$refs.popupNum.$refs.popupNumContainer;
      const sudokuWidth = this.$refs.sudokuContainer.clientWidth;

      let left = $currCell.offsetLeft + $currCell.clientWidth / 2;
      let top = $currCell.offsetTop + $currCell.clientHeight / 2;

      if ($popupNumContainer.clientWidth + left > sudokuWidth) {
        this.popupPosition = {
          top: top,
          right: sudokuWidth - $currCell.offsetLeft - $currCell.clientWidth / 2
        };
      } else {
        this.popupPosition = {
          left: left,
          top: top
        };
      }
    },
    // 隐藏选择数字面板
    hidePopupNum() {
      this.popupNumVisible = false;
      this.currCell = null;
      this.activeCell = {
        rowIndex: -1,
        colIndex: -1
      };
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
    padding: 10px;
    color: #000;
    width: 100%;
    box-sizing: border-box;
    background: rgb(235, 240, 240);
    font-size: 13px;
    font-weight: 500;

    .row {
      display: flex;
      .col {
        display: block;
        flex: 1;
        box-sizing: border-box;
        text-align: center;
        background: #fff;
        border: 1px solid #ddd;
        border-right-width: 0;
        border-bottom-width: 0;

        &.sys {
          background: #f5f5f5;
        }
        &.confirm {
          background: lightgreen;
        }
        &.doubt {
          background: lightpink;
        }
        &.empty {
          background: #fff;
        }
        &.actived {
          background: #cfe5ec;
        }
      }
    }
  }

  /*数独grid样式*/
  .sudoku-grid {
    margin-top: 20px;
    .row {
      .col {
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
  $popup-cell-height: 0.8rem;

  .popup-num {
    position: absolute;
    width: 3rem;
    padding: 0;
    z-index: 1;
    .row {
      .col {
        height: $popup-cell-height;
        line-height: $popup-cell-height;
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
