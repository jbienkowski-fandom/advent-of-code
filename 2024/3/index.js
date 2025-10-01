const fs = require('fs');

const testFile = process.argv[2] || 'input.txt';

let input = fs
    .readFileSync(testFile, 'utf8')
    .split(/\r\n/)
    .map((line) => line.split('\n'))[0]
    .filter((line) => !!line);

console.log('[Advent of Code 2024 - Day 3]', testFile, JSON.stringify(input, null, 2));
