const matrix = {
  /**
   * 打乱数组算法
   * @param {*} arr 数组
   */
  shuffle(arr) {
    for (let index = 0; index < arr.length - 1; index++) {
      const exchangeIndex =
        index + Math.floor(Math.random() * (arr.length - index));
      [arr[index], arr[exchangeIndex]] = [arr[exchangeIndex], arr[index]];
    }
    return arr;
  }
};

const shuffleArr = matrix.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(shuffleArr);

// export default {
//   matrix
// };
