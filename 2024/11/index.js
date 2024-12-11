const fs = require('fs');

const testFile = process.argv[2] || 'input.txt';
const blinks = process.argv[3] || 25;

const input = fs
    .readFileSync(testFile, 'utf8')
    .split(/\r\n/)
    .map((line) => line.split('\n'))[0]
    .filter((line) => !!line);

console.log('[Advent of Code 2024 - Day 11]', testFile, input, blinks);

// Here we go!
