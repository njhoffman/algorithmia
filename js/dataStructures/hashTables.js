/*
 * Hashtables
 *  --average access : N/A
 *  --average search : O(1)
 *  --average insert : O(1)
 *  --average delete : O(1)
 *  --worst access   : N/A
 *  --worst search   : O(n)
 *  --worst insert   : O(n)
 *  --worst delete   : O(n)
 *  --space          : O(n)
 *
 * implements an associative array abstract data type, a structure that can map keys to values
 * a hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found
*/

class HashMap {
  constructor() {
    this.list = [];
  }

  get(x) {
    let result;
    this.list.forEach(pairs => {
      if (pairs[0] === x) {
        result = pairs[1];
      }
    });
    return result;
  }

  set(x, y) {
    this.list.push([x, y]);
  }
}

let m = new HashMap();
m.set('x', 1);
m.set('y', 2);

console.time('with very few records in the map');
m.get('I_DONT_EXIST');
console.timeEnd('with very few records in the map');

m = new HashMap();

for (let x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x);
}

console.time('with lots of records in the map');
m.get('I_DONT_EXIST');
console.timeEnd('with lots of records in the map');
