function quickSort(array: number[]): number[] {
  if (array.length === 0) {
    return array;
  }
  const pivot = Math.floor(array.length / 2);

  const left = [];
  const right = [];

  for (let i = pivot - 1; i > 0; i--) {
    if (array[i] < array[pivot]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  for (let i = pivot + 1; i < array.length; i++) {
    if (array[i] > array[pivot]) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }

  return [...quickSort(left), array[pivot], ...quickSort(right)];
}
