export default {
  // 打乱数组算法
  shuffle(arr) {
    for (let index = 0; index < arr.length - 1; index++) {
      const exchangeIndex =
        index + Math.floor(Math.random() * (arr.length - index));
      console.log(index, exchangeIndex);
      [arr[index], arr[exchangeIndex]] = [arr[exchangeIndex], arr[index]];
    }
    return arr;
  },
  // 检测输入数字是否合法
  checkSudokuNum(matrix, n, rowIndex, colIndex) {
    console.log(matrix, n, rowIndex, colIndex);
    return true;
  }
};
