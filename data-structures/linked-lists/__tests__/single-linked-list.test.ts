import _ from "lodash";
import { Node, LinkedList } from "../single-linked-list";

describe("empty linked-list", () => {
  test("constructor", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull;
    expect(list.tail).toBeNull;
    expect(list.length).toBe(0);
  });
});

describe("linked-list with items", () => {
  const headNodeValue = 1;
  const nodeValue = 2;

  describe("add items to linked-list", () => {
    test("prepend", () => {
      let list = new LinkedList();
      const node1 = list.prepend(nodeValue);
      const expectedValue = new Node(nodeValue);
      expect(_.isEqual(node1, expectedValue)).toBe(true);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.tail, node1)).toBe(true);
      expect(list.length).toBe(1);

      const node2 = list.prepend(headNodeValue);
      expect(_.isEqual(node2, new Node(headNodeValue, node1))).toBe(true);
      expect(_.isEqual(list.head, node2)).toBe(true);
      expect(_.isEqual(list.tail, node1)).toBe(true);

      expect(list.length).toBe(2);
    });

    test("append", () => {
      let list = new LinkedList();
      const node1 = list.append(headNodeValue);
      const node2 = list.append(nodeValue);

      expect(_.isEqual(node2, new Node(nodeValue))).toBe(true);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.tail, node2)).toBe(true);
      expect(list.length).toBe(2);
    });

    test("insert", () => {
      let list = new LinkedList();
      const node1 = list.append(headNodeValue);
      const node2 = list.append(nodeValue);
      list.insert(1, 3);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.get(1), new Node(3, node2))).toBe(true);
      expect(_.isEqual(list.tail, node2)).toBe(true);
      expect(list.length).toBe(3);
    });
  });

  describe("remove items from linked-list", () => {
    test("shift", () => {
      let list = new LinkedList();
      const node1 = list.prepend(nodeValue);
      const node2 = list.prepend(headNodeValue);

      let removedhead = list.shift();

      expect(_.isEqual(removedhead, node2)).toBe(true);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.tail, node1)).toBe(true);
      expect(list.length).toBe(1);

      removedhead = list.shift();

      expect(_.isEqual(removedhead, node1)).toBe(true);
      expect(list.head).toBeNull;
      expect(list.tail).toBeNull;
      expect(list.length).toBe(0);
    });

    test("pop", () => {
      let list = new LinkedList();
      const node1 = list.prepend(nodeValue);
      const node2 = list.prepend(headNodeValue);

      let removedElement = list.pop();

      expect(_.isEqual(removedElement, node1)).toBe(true);
      expect(_.isEqual(list.head, node2)).toBe(true);
      expect(_.isEqual(list.tail, node2)).toBe(true);
    });

    test("remove", () => {
      let list = new LinkedList();
      const node1 = list.append(headNodeValue);
      const node2 = list.append(nodeValue);
      list.insert(1, 3);

      const removedNode = list.remove(1);

      expect(_.isEqual(removedNode, new Node(3))).toBe(true);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.tail, node2)).toBe(true);
      expect(list.length).toBe(2);
    });
  });

  test("get", () => {
    let list = new LinkedList();
    const node1 = list.append(headNodeValue);
    const node2 = list.append(nodeValue);
    const node3 = list.append(3);

    expect(_.isEqual(list.get(0), node1)).toBe(true);
    expect(_.isEqual(list.get(1), node2)).toBe(true);
    expect(_.isEqual(list.get(2), node3)).toBe(true);
  });

  test("set", () => {
    let list = new LinkedList();
    list.append(headNodeValue);
    list.append(nodeValue);
    list.append(3);

    const changedNode = list.set(1, 10);
    expect(_.isEqual(changedNode, list.get(1))).toBe(true);
  });

  test("toArray", () => {
    let list = new LinkedList();
    list.append(headNodeValue);
    list.append(nodeValue);
    list.append(3);

    const expectedValue = [1, 2, 3];

    expect(list.toArray()).toStrictEqual(expectedValue);
  });

  test("fromArray", () => {
    const values = [1, 2, 3];
    const list = new LinkedList().fromArray(values);

    const expectedValue = new Node(1);
    expectedValue.next = new Node(2);
    expectedValue.next.next = new Node(3);

    expect(_.isEqual(list, expectedValue)).toBe(true);
  });
});
