const fs = require('fs');

const testFile = process.argv[3] || 'input.txt';

let input = fs
    .readFileSync(testFile, 'utf8')
    .split(/\r\n/)
    .map((line) => line.split('\n'))[0]
    .filter((line) => !!line)[0]
    .split(' ')
    .map(Number);

console.log('[Advent of Code 2024 - Day 3]', testFile, input);
