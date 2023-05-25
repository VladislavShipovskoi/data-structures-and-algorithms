import { bubbleSort, quickSort, selectionSort } from "../index";

describe("sorting", () => {
  let array: number[];
  let expectedValue = [-1, 0, 2, 4, 5, 10, 25, 33, 47, 86];
  beforeEach(() => {
    array = [25, 47, 86, 2, 0, -1, 5, 33, 4, 10];
  });
  afterEach(() => {
    array = [];
  });

  test("bubble-sort", () => {
    expect(bubbleSort(array)).toStrictEqual(expectedValue);
  });

  test("quick-sort", () => {
    expect(quickSort(array)).toStrictEqual(expectedValue);
  });

  test("selection-sort", () => {
    expect(selectionSort(array)).toStrictEqual(expectedValue);
  });
});
