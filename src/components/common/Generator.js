import utils from "../../assets/js/utils";

export default class Generator {
  constructor() {
    this.matrix = [];
    for (let i = 0; i < 9; i++) {
      const subarr = new Array(9).fill(0);
      this.matrix.push(subarr);
    }
  }

  static createInstance() {
    if (!this.instance) {
      this.instance = new Generator();
    }
    return this.instance;
  }

  get Matrix() {
    return this.matrix;
  }

  init() {
    while (!this.generate()) {
      console.warn("生成数据失败，重新生成");
    }
  }

  generate() {
    for (let n = 1; n <= 9; n++) {
      if (!this.fillNum(n)) {
        return false;
      }
    }
    return true;
  }

  // 填充数字
  fillNum(n) {
    return this.fillRow(n, 0);
  }

  // 填充当前行
  fillRow(n, rowIndex) {
    if (rowIndex > 8) {
      return true;
    }
    const currRow = this.matrix[rowIndex];
    for (let i = 0; i < currRow.length; i++) {
      const colIndex = i;
      if (currRow[colIndex]) {
        continue;
      }
      if (!this.checkSudokuNum(this.matrix, n, rowIndex, colIndex)) {
        continue;
      }
      currRow[colIndex] = n;
      if (!this.fillRow(n, rowIndex + 1)) {
        currRow[colIndex] = 0;
        continue;
      }
      return true;
    }
    return false;
  }

  // 检测当前填入数据
  checkSudokuNum(matrix, n, rowIndex, colIndex) {
    const row = matrix[rowIndex];
    const col = matrix.map(row => row[colIndex]);
    const { boxIndex } = utils.convertPointToBox(rowIndex, colIndex);
    const boxPoints = utils.queryPointByBox(boxIndex);
    const box = [];
    boxPoints.forEach(p => {
      box.push(matrix[p.rowIndex][p.colIndex]);
    });

    for (let i = 0; i < 9; i++) {
      if (row[i] === n || col[i] === n || box[i] === n) {
        return false;
      }
    }
    return true;
  }
}