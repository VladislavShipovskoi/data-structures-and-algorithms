class Node<T> {
  public next: Node<T> | null;
  constructor(public value: T, next?: Node<T>) {
    this.next = next ? next : null;
  }
}

interface ILinkedList<T> {
  append(value: T): Node<T>;
  prepend(value: T): Node<T>;
  shift(): Node<T> | undefined;
  pop(): Node<T> | undefined;
  get(index: number): Node<T> | undefined;
  set(index: number, value: T): Node<T> | undefined;
  insert(index: number, value: T): Node<T> | undefined;
  remove(index: number): Node<T> | undefined;
  traverse(): T[];
}

class LinkedList<T> implements ILinkedList<T> {
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
      this.tail = this.head;
    } else if (this.length && this.tail) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
    return this.tail as Node<T>;
  }

  public prepend(value: T): Node<T> {
    const node = new Node(value);
    if (!this.length) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this.head;
  }

  public shift(): Node<T> | undefined {
    if (!this.head) return undefined;

    const node: Node<T> = this.head;
    this.head = this.head.next;

    this.length -= 1;

    if (!this.length) {
      this.tail = null;
    }

    node.next = null;
    return node;
  }

  public pop(): Node<T> | undefined {
    if (!this.head) return undefined;

    let current = this.head;
    let previous = this.head;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    this.tail = previous;
    this.tail.next = null;
    this.length -= 1;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  get(index: number): Node<T> | undefined {
    if (index < 0 || index > this.length) {
      throw new Error("Index out Of bounds exception");
    }

    if (!this.head) {
      return undefined;
    }

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next as Node<T>;
    }

    return node;
  }

  set(index: number, value: T): Node<T> | undefined {
    if (index < 0 || index > this.length) {
      throw new Error("Index out Of bounds exception");
    }

    const node = this.get(index);
    if (!node) return;
    node.value = value;
    return node;
  }

  insert(index: number, value: T): Node<T> | undefined {
    if (index < 0 || index > this.length) {
      throw new Error("Index out Of bounds exception");
    }

    if (!this.head) return undefined;

    if (!index) return this.prepend(value);
    if (index === this.length) return this.append(value);

    const node = new Node(value);
    const previous = this.get(index - 1) as Node<T>;

    node.next = previous.next;
    previous.next = node;
    this.length += 1;

    return node;
  }

  remove(index: number): Node<T> | undefined {
    if (index < 0 || index > this.length) {
      throw new Error("Index out Of bounds exception");
    }

    if (!index) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previous = this.get(index - 1) as Node<T>;
    const node = previous.next as Node<T>;

    previous.next = node.next;
    node.next = null;

    this.length -= 1;

    return node;
  }

  public traverse(): T[] {
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
}

export { Node, LinkedList };
