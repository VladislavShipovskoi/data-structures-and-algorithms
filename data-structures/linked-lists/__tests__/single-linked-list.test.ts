import _ from "lodash";
import { Node, LinkedList } from "../single-linked-list";

describe("empty linked-list", () => {
  test("constructor", () => {
    let list = new LinkedList<number>();
    expect(list.head).toBeNull;
    expect(list.tail).toBeNull;
    expect(list.length).toBe(0);
  });
});

describe("linked-list with items", () => {
  let list: LinkedList<number> | null = null;
  const headNodeValue = 1;
  const nodeValue = 2;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  afterEach(() => {
    list = null;
  });

  describe("add items to linked-list", () => {
    test("prepend", () => {
      const node1 = list!.prepend(nodeValue);
      const expectedValue = new Node(nodeValue);
      expect(_.isEqual(node1, expectedValue)).toBe(true);
      expect(_.isEqual(list!.head, node1)).toBe(true);
      expect(_.isEqual(list!.tail, node1)).toBe(true);
      expect(list!.length).toBe(1);

      const node2 = list!.prepend(headNodeValue);
      expect(_.isEqual(node2, new Node(headNodeValue, node1))).toBe(true);
      expect(_.isEqual(list!.head, node2)).toBe(true);
      expect(_.isEqual(list!.tail, node1)).toBe(true);

      expect(list!.length).toBe(2);
    });

    test("append", () => {
      console.log(list);
      const node1 = list!.append(nodeValue);
      const node2 = list!.append(headNodeValue);

      expect(_.isEqual(node2, new Node(headNodeValue))).toBe(true);
      expect(_.isEqual(list!.head, node1)).toBe(true);
      expect(_.isEqual(list!.tail, node2)).toBe(true);
      expect(list!.length).toBe(2);
    });

    test("add", () => {});
  });

  describe("remove items from linked-list", () => {
    test("shift", () => {
      const node1 = list!.prepend(nodeValue);
      const node2 = list!.prepend(headNodeValue);

      let removedhead = list!.shift();

      expect(_.isEqual(removedhead, node2)).toBe(true);
      expect(_.isEqual(list!.head, node1)).toBe(true);
      expect(_.isEqual(list!.tail, node1)).toBe(true);
      expect(list!.length).toBe(1);

      removedhead = list!.shift();

      expect(_.isEqual(removedhead, node1)).toBe(true);
      expect(list!.head).toBeNull;
      expect(list!.tail).toBeNull;
      expect(list!.length).toBe(0);
    });

    test("pop", () => {
      const node1 = list!.prepend(nodeValue);
      const node2 = list!.prepend(headNodeValue);

      let removedElement = list!.pop();

      expect(_.isEqual(removedElement, node1)).toBe(true);
      expect(_.isEqual(list!.head, node2)).toBe(true);
      expect(_.isEqual(list!.tail, node2)).toBe(true);
    });

    test("remove", () => {});
  });
});
