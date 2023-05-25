function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

export { quickSort };
