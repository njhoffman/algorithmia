/*
 * Stack
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
 *  stack is an abstract data type that serves as a collection of elements, with two principal operations:
 *  push, which adds an element to the collection, and
 *  pop, which removes the most recently added element that was not yet removed.
 *  The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.[1] The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.[2]
 *  Considered as a linear data structure, or more abstractly a sequential collection, the push and pop operations occur only at one end of the structure, referred to as the top of the stack. This makes it possible to implement a stack as a singly linked list and a pointer to the top element. A stack may be implemented to have a bounded capacity. If the stack is full and does not contain enough space to accept an entity to be pushed, the stack is then considered to be in an overflow state. The pop operation removes an item from the top of the stack.
*/
