class Generator {
  constructor() {}

  //单例模式
  static createInstance() {
    if (!this.instance) {
      this.instance = new Generator();
    }
    return this.instance;
  }

  // 生成二维数独数组
  generate() {
    this.constNum = 3;
    this.matrix = new Array(this.constNum).fill(
      new Array(this.constNum).fill(0)
    );
    const nums = Array.from(new Array(this.constNum), (v, i) => i + 1);
    // const rowIndex = 0;
    // for (let i = 0; i < nums.length; i++) {
    //   this.fillRow(nums[i], rowIndex);
    // }
    for (let rowIndex = 0; rowIndex < this.matrix.length; rowIndex++) {
      for (
        let colIndex = 0;
        colIndex < this.matrix[rowIndex].length;
        colIndex++
      ) {
        for (let n = 0; n < nums.length; n++) {
          const num = nums[n];
          if (this.checkNum(num, rowIndex, colIndex)) {
            this.matrix[rowIndex][colIndex] = num;
            break;
          }
        }
      }
    }
    console.log(this.matrix);
  }

  checkNum(num, rowIndex, colIndex) {
    const row = this.matrix[rowIndex];
    const col = this.matrix.map(row => row[colIndex]);
    console.log(row, col, num);
    for (let i = 0; i < this.constNum; i++) {
      if (row[i] === num || col[i] === num) {
        console.log(row, col);
        return false;
      }
    }
    return true;
  }

  fillRow(num, rowIndex) {
    if (rowIndex > 8) {
      return true;
    }
    this.fillNum(num, rowIndex);
  }
}

const gen = Generator.createInstance();
gen.generate();
