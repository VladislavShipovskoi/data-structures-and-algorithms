import { isEqual, isObject } from "../utility";

test("isObject", () => {
  expect(isObject({})).toBe(true);
  expect(isObject({ test1: "1" })).toBe(true);

  expect(isObject(new Map())).toBe(false);
  expect(isObject(new Set())).toBe(false);
  expect(isObject([])).toBe(false);

  expect(isObject(1)).toBe(false);
  expect(isObject("test")).toBe(false);
  expect(isObject(1n)).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject(Symbol())).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(null)).toBe(false);
});

describe("isEqual", () => {
  test("wit empty objects", () => {
    expect(isEqual({}, {})).toBe(true);
  });

  describe("without nesting", () => {
    test("wit same objects", () => {
      expect(
        isEqual(
          { test1: "test1", test2: "test2" },
          { test1: "test1", test2: "test2" }
        )
      ).toBe(true);
    });
    test("same keys, different values", () => {
      expect(
        isEqual({ test1: "1", test2: "2" }, { test1: "1", test2: "3" })
      ).toBe(false);
    });
    test("different keys, same values", () => {
      expect(
        isEqual({ test1: "1", test2: "2" }, { test1: "1", test3: "2" })
      ).toBe(false);
    });
  });
});
