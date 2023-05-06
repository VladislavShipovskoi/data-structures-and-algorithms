class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  #head;
  #tail;
  #length;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get size() {
    return this.#length;
  }

  add(index, value) {
    let innerIndex = 0;

    let previous = null;
    let current = this.#head;

    try {
      while (current) {
        if (index === innerIndex) {
          const newNode = new Node(value, previous.next);
          previous.next = newNode;
          newNode.next = current;
          return current;
        }

        previous = current;
        current = current.next;
        innerIndex += 1;
      }
      throw new Error("Index out Of bounds exception");
    } catch (e) {
      console.error(e);
    }
  }

  addFirst(value) {
    const node = new Node(value);
    if (!this.#head) {
      this.#head = node;
      this.#tail = this.#head;
    } else {
      node.next = this.#head;
      this.#head = node;
    }
    this.#length += 1;
    return this.#head;
  }

  removeFirst() {
    if (!this.#head) {
      return null;
    }

    const current = this.#head;
    this.#head = current.next;
    this.#length -= 1;

    if (this.#length === 0) {
      this.#tail = null;
    }

    return current;
  }

  addLast(value) {
    const node = new Node(value);

    if (this.#length === 0) {
      this.#head = node;
      this.#tail = this.#head;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }

    this.#length += 1;
    return this.#tail;
  }

  removeLast() {
    if (!this.#head) {
      return null;
    }

    let current = this.#head;

    if (this.#length === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      let previous = null;

      while (current) {
        if (current === this.#tail) {
          previous.next = null;
          this.#tail = previous;
          this.#length -= 1;
          return current;
        }

        previous = current;
        current = current.next;
      }
    }
  }

  contains(value) {
    if (!this.#head) {
      return null;
    }

    let current = this.#head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  get(index) {
    let innerIndex = 0;

    let current = this.#head;

    try {
      while (current) {
        if (index === innerIndex) {
          current.next;
          return current;
        }
        current = current.next;
        innerIndex += 1;
      }
      throw new Error("Index out Of bounds exception");
    } catch (e) {
      console.error(e);
    }
  }

  indexOf(value) {
    let innerIndex = 0;

    let current = this.#head;

    while (current) {
      if (current.value === value) {
        return innerIndex;
      }
      current = current.next;
      innerIndex += 1;
    }

    return -1;
  }

  lastIndexOf(value) {
    let innerIndex = 0;
    let result = -1;

    let current = this.#head;

    while (current) {
      if (current.value === value) {
        result = innerIndex;
      }
      current = current.next;
      innerIndex += 1;
    }

    return result;
  }

  remove(index) {
    let innerIndex = 0;

    let current = this.#head;
    let previous = null;

    try {
      while (current) {
        if (innerIndex === index) {
          previous.next = current.next;
          return true;
        }
        previous = current;
        current = current.next;
        innerIndex += 1;
      }
      throw new Error("Index out Of bounds exception");
    } catch (e) {
      console.error(e);
    }
  }

  set(index, value) {
    let innerIndex = 0;

    let current = this.#head;

    try {
      while (current) {
        if (innerIndex === index) {
          current.value = value;
          return value;
        }
        innerIndex += 1;
        current = current.next;
      }
      throw new Error("Index out Of bounds exception");
    } catch (e) {
      console.error(e);
    }
  }

  toArray() {
    if (!this.#head) {
      return [];
    }

    const result = [];
    let current = this.#head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  //TODO - implement
  fromArray() {}
}
