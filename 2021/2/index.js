const fs = require('fs');

const inputFile = process.argv[2] || 'input.txt';

const input = fs
  .readFileSync(inputFile, 'utf8')
  .split(/\r\n/)
  .map((line) => line.split('\n'))[0]
  .filter((line) => !!line);

console.log('Input file:', inputFile);
console.log('Input', input);
