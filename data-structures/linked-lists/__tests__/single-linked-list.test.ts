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
  describe("add items to linked-list", () => {
    it("should prepend node to linked-list", () => {
      let list = new LinkedList();

      const expectedValue = new Node(2);

      const node1 = list.prepend(2);
      expect(_.isEqual(node1, expectedValue)).toBe(true);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.tail, node1)).toBe(true);
      expect(list.length).toBe(1);

      const node2 = list.prepend(1);
      expect(_.isEqual(node2, new Node(1, node1))).toBe(true);
      expect(_.isEqual(list.head, node2)).toBe(true);
      expect(_.isEqual(list.tail, node1)).toBe(true);
      expect(list.length).toBe(2);
    });

    it("should append node to linked-list", () => {
      let list = new LinkedList();
      const node1 = list.append(1);
      const node2 = list.append(2);

      expect(_.isEqual(node2, new Node(2))).toBe(true);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.tail, node2)).toBe(true);
      expect(list.length).toBe(2);
    });

    it("should insert node to linked-list", () => {
      let list = new LinkedList();
      const node1 = list.append(1);
      const node2 = list.append(2);
      list.insert(1, 3);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.get(1), new Node(3, node2))).toBe(true);
      expect(_.isEqual(list.tail, node2)).toBe(true);
      expect(list.length).toBe(3);
    });
  });

  describe("remove items from linked-list", () => {
    it("should shift node from linked-list", () => {
      let list = new LinkedList();
      const node1 = list.prepend(2);
      const node2 = list.prepend(1);

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

    it("should pop node from linked-list", () => {
      let list = new LinkedList();
      const node1 = list.prepend(2);
      const node2 = list.prepend(1);

      let removedElement = list.pop();

      expect(_.isEqual(removedElement, node1)).toBe(true);
      expect(_.isEqual(list.head, node2)).toBe(true);
      expect(_.isEqual(list.tail, node2)).toBe(true);
    });

    it("should remove node from linked-list", () => {
      let list = new LinkedList();
      const node1 = list.append(2);
      const node2 = list.append(1);
      list.insert(1, 3);

      const removedNode = list.remove(1);

      expect(_.isEqual(removedNode, new Node(3))).toBe(true);
      expect(_.isEqual(list.head, node1)).toBe(true);
      expect(_.isEqual(list.tail, node2)).toBe(true);
      expect(list.length).toBe(2);
    });
  });

  it("should get node from linked-list", () => {
    let list = new LinkedList();
    const node1 = list.append(1);
    const node2 = list.append(2);
    const node3 = list.append(3);

    expect(_.isEqual(list.get(0), node1)).toBe(true);
    expect(_.isEqual(list.get(1), node2)).toBe(true);
    expect(_.isEqual(list.get(2), node3)).toBe(true);
  });

  it("should set new value to linked-list node", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    const changedNode = list.set(1, 10);
    expect(_.isEqual(changedNode, list.get(1))).toBe(true);
  });

  it("should convert linked-list to array", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    const expectedValue = [1, 2, 3];

    expect(list.toArray()).toStrictEqual(expectedValue);
  });

  it("should create linked-list from array", () => {
    const values = [1, 2, 3];
    const list = new LinkedList().fromArray(values);

    const expectedValue = new Node(1);
    expectedValue.next = new Node(2);
    expectedValue.next.next = new Node(3);

    expect(_.isEqual(list, expectedValue)).toBe(true);
  });
});
