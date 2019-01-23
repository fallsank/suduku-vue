export default {
  // 打乱数组算法
  shuffle(arr) {
    for (let index = 0; index < arr.length - 1; index++) {
      const exchangeIndex = index + Math.floor(Math.random() * (arr.length - index));
      console.log(index, exchangeIndex);
      [arr[index], arr[exchangeIndex]] = [arr[exchangeIndex], arr[index]];
    }
    return arr;
  },
  /**
   * 根据宫th获取所有坐标点
   * @param boxIndex
   */
  queryPointByBox(boxIndex) {
    const points = [];
    for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
      const point = this.convertBoxToPoint(boxIndex, cellIndex);
      points.push({
        rowIndex: point.rowIndex,
        colIndex: point.colIndex,
      });
    }
    return points;
  },
  /**
   * 将宫th/偏移量转换为点坐标
   * @param boxIndex 宫th
   * @param cellIndex 偏移量
   * @returns {{colIndex: *, rowIndex: *}}
   */
  convertBoxToPoint(boxIndex, cellIndex) {
    return {
      rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
      colIndex: (boxIndex % 3) * 3 + (cellIndex % 3),
    };
  },
  /**
   * 将点坐标转换为宫th/偏移量
   * @param rowIndex 行坐标
   * @param colIndex 列坐标
   * @returns {{cellIndex: *, boxIndex: *}}
   */
  convertPointToBox(rowIndex, colIndex) {
    return {
      boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
      cellIndex: (rowIndex % 3) * 3 + (colIndex % 3),
    };
  },
};
