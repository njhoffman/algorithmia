const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const bubbleSort = require('../problems/03-Sorting/A-BubbleSort/BubbleSort');
const selectionSort = require('../problems/03-Sorting/B-SelectionSort/SelectionSort');

// add tests
suite.add('sorting#BubbleSort', () => {
  bubbleSort([7, 5, 2, 4, 3, 9])
}).add('sorting#selectionSort', () => {
  selectionSort([7, 5, 2, 4, 3, 9])
}).on('cycle', function(event) {
  console.log(String(event.target));
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': true });
