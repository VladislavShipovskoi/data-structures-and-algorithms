import LinkedList from "../single-linked-list";
import { isEqual } from "../../../utility/utility";

describe("empty linked-list", () => {
  test("constructor", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull;
    expect(list.tail).toBeNull;
    expect(list.size).toBe(0);
  });
});

describe("linked-list with items", () => {
  let list = null;
  const headNodeValue = 1;
  const nodeValue = 2;

  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = null;
  });

  describe("add items to linked-list", () => {
    test("addFirst", () => {
      const node1 = list.addFirst(nodeValue);
      expect(isEqual(node1, { value: nodeValue, next: null })).toBe(true);
      expect(isEqual(list.head, node1)).toBe(true);
      expect(isEqual(list.tail, node1)).toBe(true);
      expect(list.size).toBe(1);

      const node2 = list.addFirst(headNodeValue);
      expect(isEqual(node2, { value: headNodeValue, next: node1 })).toBe(true);
      expect(isEqual(list.head, node2)).toBe(true);
      expect(isEqual(list.tail, node1)).toBe(true);

      expect(list.size).toBe(2);
    });

    test("addLast", () => {
      const node1 = list.addLast(nodeValue);
      const node2 = list.addLast(headNodeValue);

      expect(isEqual(node2, { value: headNodeValue, next: null })).toBe(true);
      expect(isEqual(list.head, node1)).toBe(true);
      expect(isEqual(list.tail, node2)).toBe(true);
      expect(list.size).toBe(2);
    });

    test("add", () => {});
  });

  describe("remove items from linked-list", () => {
    test("removeFirst", () => {
      const node1 = list.addFirst(nodeValue);
      const node2 = list.addFirst(headNodeValue);

      let removedHead = list.removeFirst();

      expect(isEqual(removedHead, node2)).toBe(true);
      expect(isEqual(list.head, node1)).toBe(true);
      expect(isEqual(list.tail, node1)).toBe(true);
      expect(list.size).toBe(1);

      removedHead = list.removeFirst();

      expect(isEqual(removedHead, node1)).toBe(true);
      expect(list.head).toBeNull;
      expect(list.tail).toBeNull;
      expect(list.size).toBe(0);
    });

    test("removeLast", () => {
      const node1 = list.addFirst(nodeValue);
      const node2 = list.addFirst(headNodeValue);

      let removedElement = list.removeLast();

      expect(isEqual(removedElement, node1)).toBe(true);
      expect(isEqual(list.head, node2)).toBe(true);
      expect(isEqual(list.tail, node2)).toBe(true);
    });

    test("remove", () => {});
  });

  //TODO - add tests
  test("contains", () => {});
  test("get", () => {});
  test("indexOf", () => {});
  test("lastIndexOf", () => {});
  test("set", () => {});
  test("toArray", () => {});
});
