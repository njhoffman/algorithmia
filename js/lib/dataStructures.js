module.exports = {
  array: {
    average: {
      access: (n) => 1,
      search: (n) => n,
      insertion: (n) => n,
      deletion: (n) => n,
    },
    worst: {
      access: (n) => 1,
      search: (n) => n,
      insertion: (n) => n,
      deletion: (n) => n,
    },
  },
  stack: {
    average: {
      access: (n) => n,
      search: (n) => n,
      insertion: (n) => 1,
      deletion: (n) => 1,
    },
    worst: {
      access: (n) => n,
      search: (n) => n,
      insertion: (n) => 1,
      deletion: (n) => 1,
    },
  },
  queue: {
    average: {
      access: (n) => n,
      search: (n) => n,
      insertion: (n) => 1,
      deletion: (n) => 1,
    },
    worst: {
      access: (n) => n,
      search: (n) => n,
      insertion: (n) => 1,
      deletion: (n) => 1,
    },
  },
  linkedList: {
    average: {
      access: (n) => n,
      search: (n) => n,
      insertion: (n) => 1,
      deletion: (n) => 1,
    },
    worst: {
      access: (n) => n,
      search: (n) => n,
      insertion: (n) => 1,
      deletion: (n) => 1,
    },
  },
  hashTable: {
    average: {
      access: (n) => 0,
      search: (n) => 1,
      insertion: (n) => 1,
      deletion: (n) => 1,
    },
    worst: {
      access: (n) => 0,
      search: (n) => n,
      insertion: (n) => n,
      deletion: (n) => n,
    },
  },
  binarySearchTree: {
    average: {
      access: (n) => Math.log(n),
      search: (n) => Math.log(n),
      insertion: (n) => Math.log(n),
      deletion: (n) => Math.log(n),
    },
    worst: {
      access: (n) => n,
      search: (n) => n,
      insertion: (n) => n,
      deletion: (n) => n,
    },
  },
  cartesianTree: {
    average: {
      access: (n) => 0,
      search: (n) => Math.log(n),
      insertion: (n) => Math.log(n),
      deletion: (n) => Math.log(n),
    },
    worst: {
      access: (n) => 0,
      search: (n) => n,
      insertion: (n) => n,
      deletion: (n) => n,
    },
  },
  bTree: {
    average: {
      access: (n) => Math.log(n),
      search: (n) => Math.log(n),
      insertion: (n) => Math.log(n),
      deletion: (n) => Math.log(n),
    },
    worst: {
      access: (n) => Math.log(n),
      search: (n) => Math.log(n),
      insertion: (n) => Math.log(n),
      deletion: (n) => Math.log(n),
    },
  },
  // skipList: {},
  // redBlackTree: {},
  // splayTree: {},
  // avlTree: {},
  // kdTree: {}
};
