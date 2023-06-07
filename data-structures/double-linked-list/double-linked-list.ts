class Node<T = unknown> {
  public next: Node<T> | null;
  public previous: Node<T> | null;

  constructor(
    public value: T,
    previous?: Node<T> | null,
    next?: Node<T> | null
  ) {
    this.next = next || null;
    this.previous = previous || null;
  }
}

interface IDoubleLinkedList<T> {
  append(value: T): Node<T>;
  prepend(value: T): Node<T>;
  shift(): Node<T> | null;
  pop(): Node<T> | null;
  get(index: number): Node<T> | null;
  set(index: number, value: T): Node<T> | null;
  insert(index: number, value: T): Node<T> | null;
  remove(index: number): Node<T> | null;
  toArray(): T[];
  fromArray(array: T[]): Node<T>;
}

class DoubleLinkedList<T> implements IDoubleLinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length;

  constructor(value?: T) {
    if (value) {
      const node = new Node(value);
      this.head = node;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  public append(value: T): Node<T> {
    const node = new Node(value);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else if (this.length && this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.length += 1;
    return this.tail as Node<T>;
  }

  public prepend(value: T): Node<T> {
    const node = new Node(value, null, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      this.head = node;
    }
    this.length += 1;
    return this.head;
  }

  public shift(): Node<T> | null {
    if (!this.head) return null;

    const node: Node<T> = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length -= 1;

    node.next = null;
    return node;
  }

  public pop(): Node<T> | null {
    if (!this.tail) return null;

    const removedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous as Node<T>;
      this.tail.next = null;
    }

    return removedTail;
  }

  get(index: number): Node<T> | null {
    if (index < 0 || index > this.length) {
      throw new Error("Index out Of bounds exception");
    }

    if (!this.head) {
      return null;
    }

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next as Node<T>;
    }

    return node;
  }

  set(index: number, value: T): Node<T> | null {
    if (index < 0 || index > this.length) {
      throw new Error("Index out Of bounds exception");
    }

    const node = this.get(index);
    if (!node) return null;
    node.value = value;
    return node;
  }

  insert(index: number, value: T): Node<T> | null {
    if (index < 0 || index > this.length) {
      throw new Error("Index out Of bounds exception");
    }

    if (!this.head) return null;

    if (!index) return this.prepend(value);
    if (index === this.length) return this.append(value);

    const node = new Node(value);

    const currentNode = this.get(index) as Node<T>;
    const previous = currentNode.previous as Node<T>;

    node.next = currentNode;
    previous.next = node;
    this.length += 1;

    return node;
  }

  remove(index: number): Node<T> | null {
    if (index < 0 || index > this.length) {
      throw new Error("Index out Of bounds exception");
    }

    if (!index) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index) as Node<T>;
    const previous = node.previous as Node<T>;
    const nextNode = node.next as Node<T>;

    previous.next = nextNode;

    node.next = null;
    node.previous = null;

    this.length -= 1;

    return node;
  }

  toArray(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (node: Node<T>): T[] => {
      array.push(node.value);
      return node.next ? addToArray(node.next) : array;
    };

    return addToArray(this.head);
  }

  fromArray(values: T[]): Node<T> {
    values.forEach((value) => this.append(value));
    return this.head as Node<T>;
  }
}

export { Node, DoubleLinkedList };
