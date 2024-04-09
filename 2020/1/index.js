const fs = require('fs');

const inputFile = process.argv[2] || 'input.txt';

const input = fs
  .readFileSync(inputFile, 'utf8')
  .split(/\r\n/)
  .map((line) => line.split('\n'))[0]
  .filter((line) => !!line);

console.log('Input file:', inputFile);
console.log('Input', input);

const sorted = input.map(Number).sort((a,b) => a - b);
console.log('Result - part 1:', partOne(sorted));
console.log('Result - part 2:', partTwo(sorted));

function twoPointerSearch(input, target) { 
  let left = 0;
  let right = input.length -1;

  while(input[left] + input[right] !== target) { 
    // sum is less than the target, increase left pointer
    if(input[left] + input[right] < target){
      left++;
    // sum is greater than the target, decrease right pointer
    } else {
      right--;
    }
  }

  if (input[left] + input[right] === target) {
    return [input[left], input[right]]
  }

  return [0, 0];
}

function partOne(sorted) {
  const [a, b] = twoPointerSearch(sorted, 2020);
  return a * b;
}

function partTwo(sorted) {
  const target = 2020;
  for (let i = 0; i < sorted.length; i++) {
    const [a, b] = twoPointerSearch(sorted, target - sorted[i]);
    if (sorted[i] + a + b === target) {
      return sorted[i] * a * b;
    }
  }
  return 0;
}