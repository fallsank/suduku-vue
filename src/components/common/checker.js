import utils from "../../assets/js/utils";

// 检查数独解决方案
function checkArray(arr) {
  const checkArr = new Array(arr.length);
  checkArr.fill(true);
  for (let i = 0; i < arr.length - 1; i++) {
    if (!checkArr[i]) {
      continue;
    }
    if (!arr[i]) {
      checkArr[i] = false;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        checkArr[i] = checkArr[j] = false;
      }
    }
  }
  return checkArr;
}

export default class Checker {
  constructor(matrix) {
    this.matrix = matrix;
    this.checkMatrix = utils.createMatrix(true);
  }

  get CheckMatrix() {
    return this.checkMatrix;
  }

  get CheckResult() {
    return this.checkResult;
  }

  /**
   * 对数独元素进行检查
   */
  check() {
    this.checkRow();
    this.checkCol();
    this.checkBox();
    this.checkResult = this.checkMatrix.every(row => row.every(cell => cell));
    return this.checkResult;
  }

  /**
   * 检查行
   */
  checkRow() {
    for (let rowIndex = 0; rowIndex < this.matrix.length; rowIndex++) {
      const checkRow = checkArray(this.matrix[rowIndex]);
      for (let colIndex = 0; colIndex < checkRow.length; colIndex++) {
        if (!checkRow[colIndex]) {
          this.checkMatrix[rowIndex][colIndex] = false;
        }
      }
    }
  }

  /**
   * 检查列
   */
  checkCol() {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      const col = [];
      for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        col.push(this.matrix[rowIndex][colIndex]);
      }
      const checkCol = checkArray(col);
      for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        if (!checkCol[rowIndex]) {
          this.checkMatrix[rowIndex][colIndex] = false;
        }
      }
    }
  }

  /**
   * 检查宫
   */
  checkBox() {
    for (let boxIndex = 0; boxIndex < 9; boxIndex++) {
      // const box = Toolkit.box.getBoxMatrix(this.matrix, boxIndex);
      const boxPoints = utils.queryPointByBox(boxIndex);
      const box = [];
      boxPoints.forEach(p => {
        box.push(this.matrix[p.rowIndex][p.colIndex]);
      });
      const checkBox = checkArray(box);
      for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
        if (!checkBox[cellIndex]) {
          const point = utils.convertBoxToPoint(boxIndex, cellIndex);
          this.checkMatrix[point.rowIndex][point.colIndex] = false;
        }
      }
    }
  }
}
