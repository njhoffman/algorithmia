const scientificNotation = (num) =>
  num
    .toExponential()
    .replace(/e\+?/, '×10^')
    .replace(/(?:10\^)(\d)+$/g, (match, exp) => {
      switch (`${exp}`) {
        case '0':
          return '⁰';
        case '1':
          return '¹';
        case '2':
          return '²';
        case '3':
          return '³';
        case '4':
          return '⁴';
        case '5':
          return '⁵';
        case '6':
          return '⁶';
        case '7':
          return '⁷';
        case '8':
          return '⁸';
        case '9':
          return '⁹';
        default:
          return '';
      }
    })
    .replace(/×/, '×10')
    .replace(/^(\d)×/, '$1.00×')
    .replace(/\.(\d)×/, '.$10×')
    .replace(/\.(\d\d)(?:\d+)×/, '.$1×');

const padZeros = (num, numZeros) => (Array(numZeros).join('0') + num).slice(-numZeros);

const numCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const randomSequence = (min, max, n) => {
  const sequence = [];
  let i = n;
  while (i > 0) {
    sequence.push(min + Math.floor(Math.random() * max));
    i -= 1;
  }
  return sequence;
};
module.exports = { scientificNotation, padZeros, numCommas, randomSequence };
