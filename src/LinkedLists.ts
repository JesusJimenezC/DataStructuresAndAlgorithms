export class LinkedLists {
  head: Node | null;
  tail: Node | null;
  length: number = 0;

  constructor(value: number) {
    // Create a new node
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = newNode;
    this.length++;

    console.log('======= START - Linked Lists =======');
  }

  push(value: number) {
    // Create a new node
    // Add Node to the end of the list
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

  pop() {
    // Remove the last node
    // Update the tail
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // Last node removed
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value: number) {
    // Create a new node
    // Add Node to the beginning of the list
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return newNode;
  }

  shift() {
    // Remove the first node
    // Update the head
    if (!this.head) return undefined;

    let temp = this.head;
    // When we delete the last node, this.head is equal to null
    // that's why we do not add this.head equal to node on the last if
    this.head = this.head.next;
    this.length--;

    // Last node removed
    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  get(index: number) {
    if (!this.head || index >= this.length || index < 0) return undefined;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      if (temp.next) {
        temp = temp.next;
      }
    }

    return temp;
  }

  set(index: number, value: number) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    if (temp) {
      newNode.next = temp.next;
      temp.next = newNode;

      this.length++;
      return true;
    }
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let before = this.get(index - 1);

    if (before) {
      let temp = before.next;

      if (temp) {
        before.next = temp.next;
        temp.next = null;
        this.length--;

        return temp;
      }
    }
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    if (temp) {
      let next = temp.next;
      let prev = null;

      for (let i = 0; i < this.length; i++) {
        if (temp) {
          next = temp.next;
          temp.next = prev;
          prev = temp;
          temp = next;
        }
      }
    }

    return this;
  }
}

class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    // Create a new node
    this.value = value;
    this.next = null;
  }
}
