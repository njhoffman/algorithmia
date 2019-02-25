const { increment, swap } = require('../utils');

const heapify = (heap, i, max, config) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;


    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    if (index === i) {
      return;
    }

    /* eslint-disable no-param-reassign */
    swap(heap, i, index);
    i = index;
    /* eslint-enable no-param-reassign */
  }
};

const buildMaxHeap = (arr, config) => {
  let i = Math.floor(arr.length / 2 - 1);

  // build a max heap out of all array elements passed in
  while (i >= 0) {
    increment(config);

    heapify(arr, i, arr.length);
    i -= 1;
  }
};

const heapSortBasic = (arr, config) => {
  // Build our max heap.
  buildMaxHeap(arr, config);

  // Find last element.
  let lastElement = arr.length - 1;

  // Continue heap sorting until we have just one element left in the array
  while (lastElement > 0) {
    increment(config);

    swap(arr, 0, lastElement);
    heapify(arr, 0, lastElement);
    lastElement -= 1;
  }
  return arr;
};

module.exports = { heapSortBasic };
