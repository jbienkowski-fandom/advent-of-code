const fs = require('fs');

const inputFile = process.argv[2] || 'input.txt';

const input = fs
  .readFileSync(inputFile, 'utf8')
  .split(/\r\n/)
  .map((line) => line.split('\n'))[0]
  .filter((line) => !!line);

console.log('Input file:', inputFile);
console.log('Input', input);

function partOne() {
  let position = 0, depth = 0;

  processCommands(
    (units) => position += units,
    (units) => depth -= units,
    (units) => depth += units
  );

  return [position, depth];
}

function partTwo() {
  let position = 0, depth = 0, aim = 0;

  processCommands(
    (units) => {
      position += units;
      depth += aim * units;
    },
    (units) => aim -= units,
    (units) => aim += units
  );

  return [position, depth, aim];
}

function processCommands(onForward, onUp, onDown) {
  for (const line of input) {
    const [command, units] = line.split(' ');
    const u = Number(units);
    switch (command) {
      case 'forward':
        onForward(u);
        break;
      case 'up':
        onUp(u);
        break;
      case 'down':
        onDown(u);
        break;
      default:
        break;
    }
  }
}

const [p1, d1] = partOne();
const [p2, d2, a2] = partTwo();

console.log('Part 1', p1, d1, 'Result:', p1 * d1);
console.log('Part 2', p2, d2, a2, 'Result:', p2 * d2);