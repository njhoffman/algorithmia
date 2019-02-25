/*
 * Linked Lists
 *  --average access : O(n)
 *  --average search : O(n)
 *  --average insert : O(1)
 *  --average delete : O(1)
 *  --worst access   : O(n)
 *  --worst search   : O(n)
 *  --worst insert   : O(1)
 *  --worst delete   : O(1)
 *  --space          : O(n)
 *
 * a linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists
 * Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays, and S-expressions, though it is not uncommon to implement those data structures directly without using a linked list as the basis.
 */

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }

  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }

    const { value } = this.head;
    this.head = this.head.next;
    this.length--;

    return value;
  }

  find(val) {
    let thisNode = this.head;

    while (thisNode) {
      if (thisNode.value === val) {
        return thisNode;
      }

      thisNode = thisNode.next;
    }

    return thisNode;
  }

  remove(val) {
    if (this.length === 0) {
      return undefined;
    }

    if (this.head.value === val) {
      return this.removeFromHead();
    }

    let previousNode = this.head;
    let thisNode = previousNode.next;

    while (thisNode) {
      if (thisNode.value === val) {
        break;
      }

      previousNode = thisNode;
      thisNode = thisNode.next;
    }

    if (thisNode === null) {
      return undefined;
    }

    previousNode.next = thisNode.next;
    this.length--;
    return this;
  }
}

console.log(new LinkedList('Hello!'));
