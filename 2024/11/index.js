const fs = require('fs');

const blinks = Number(process.argv[2] || '25');
const testFile = process.argv[3] || 'input.txt';

let input = fs
    .readFileSync(testFile, 'utf8')
    .split(/\r\n/)
    .map((line) => line.split('\n'))[0]
    .filter((line) => !!line)[0]
    .split(' ')
    .map(Number);

console.log('[Advent of Code 2024 - Day 11]', testFile, input, blinks);

const cache = new Map();

function splitInHalf(num, l) {
    const a = Math.floor(num / Math.pow(10, l / 2));
    const b = num % Math.pow(10, l / 2);
    return [a, b];
}

function cachedRules(n) {
    const c = cache.get(n);
    if (c !== undefined) return c;
    const res = rules(n);
    cache.set(n, res);
    return res;
}

function rules(n) {
    if (n === 0) return [1];
    const numLength = Math.ceil(Math.log10(n + 1));
    if (numLength % 2 === 0) return splitInHalf(n, numLength);
    return [Number(n * 2024)];
}

function blink(stones) {
    const map = new Map();

    for (const [stone, count] of stones) {
        const res = cachedRules(stone);
        for (const r of res) {
            add(map, r, count);
        }
    }

    return map;
}

function add(stones, stone, count) {
    stones.set(stone, (stones.get(stone) ?? 0) + count);
}

let stones = new Map();
input.forEach((n) => add(stones, n, 1));
for (let i = 0; i < blinks; i++) {
    stones = blink(stones);
}
const result = [...stones].reduce((acc, [_, count]) => acc + count, 0);

console.log('Result:', result);
