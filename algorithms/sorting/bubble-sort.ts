function bubbleSort(array: number[]) {
  for (let limit = array.length - 1; limit > 0; limit--) {
    for (let i = 0; i < limit; i++) {
      if (array[i] > array[i + 1]) {
        const tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
      }
    }
  }

  return array;
}

export { bubbleSort };
