const _ = require('lodash');

const { randomSequence } = require('../lib/utils/number');
const { strToBool, getFiles } = require('../lib/utils/utils');

const TEST_O = _.has(process.env, 'TEST_O') ? strToBool(process.env.TEST_O) : true;

// generate number arrays with this sequence of element count
const sequences = [100];
const verbosity = 1;

before(async () => {
  const testFiles = [];
  const sortTests = (await getFiles('lib/sort')).filter((file) => /test\.js/.test(file));

  testFiles.push(...sortTests);

  testFiles.forEach((filePath) => {
    const fileName = filePath.split('/').pop();
    const origPath = filePath.replace('.test', '');

    /* eslint-disable global-require, import/no-dynamic-require */
    const testMod = require(filePath);
    const origMod = require(origPath);
    const { definition } = require(origPath);
    /* eslint-enable global-require, import/no-dynamic-require */

    if (!testMod.skip) {
      describe(`${fileName.replace('.test.js', '')}`, () => {
        it('Should export correct properties', () => {
          expect(testMod).to.include.keys(['func']);
          expect(testMod.func).to.be.a('function');
          if (TEST_O) {
            expect(testMod).to.have.keys(['func', 'oWorst', 'oBest', 'oAvg', 'oSpace']);
            expect(testMod.oWorst).to.be.a('function');
            expect(testMod.oBest).to.be.a('function');
            expect(testMod.oAvg).to.be.a('function');
            expect(testMod.oSpace).to.be.a('function');
          }
        });

        sequences.forEach((seq, i) => {
          const arr = randomSequence(0, 100, seq);
          const testConfig = { n: 0 };
          const origConfig = { n: 0 };

          const origResult = origMod(arr, origConfig);
          const testResult = testMod.func(arr, testConfig);

          const testMsg = [
            `#${i + 1} Should sort ${seq} numbers`,
            TEST_O ? `with ${origConfig.n} operations` : '',
            'correctly',
          ].join(' ');

          it(testMsg, () => {
            expect(testResult)
              .to.be.an('array')
              .with.length(seq);
            expect(origResult)
              .to.be.an('array')
              .with.length(seq);

            if (verbosity > 0) {
              console.log(origResult, testResult);
            }

            expect(testResult).to.deep.equal(origResult);
          });

          if (TEST_O) {
            it(' --Should have same O(n) as definition and ops count contained within bounds', () => {
              expect(testMod.oBest(seq)).to.equal(definition.oBest(seq), 'Best Time Complexity');
              expect(testMod.oWorst(seq)).to.equal(definition.oWorst(seq), 'Worst Time Complexity');
              expect(testMod.oAvg(seq)).to.equal(definition.oAvg(seq), 'Average Time Complexity');
              expect(testMod.oSpace(seq)).to.equal(definition.oSpace(seq), 'Space Complexity');
            });

            it(' --Should have ops count contained within defined O(n) bounds', () => {
              expect(origConfig.n).to.equal(testConfig.n);
              expect(testConfig.n).to.be.gte(testMod.oBest(seq));
              expect(testConfig.n).to.be.lte(testMod.oWorst(seq));
            });
          }
        });
      });
    }
  });
});

// mocha hack to enable before async tests to run
it(`Loading test files to each run ${sequences.length} sequences`, () => {});
