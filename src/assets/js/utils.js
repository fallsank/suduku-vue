const matrix = {
  /**
   * 打乱数组算法
   * @param {*} arr 数组
   */
  shuffle(arr) {
    for (let index = 0; index < arr.length - 1; index++) {
      const exchangeIndex =
        index + Math.floor(Math.random() * (arr.length - index));
      console.log(index, exchangeIndex);
      [arr[index], arr[exchangeIndex]] = [arr[exchangeIndex], arr[index]];
    }
    return arr;
  }
};

export default {
  matrix
};
