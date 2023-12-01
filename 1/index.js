const fs = require('fs');

const testFile = process.argv[2] || 'input.txt';

const input = fs
  .readFileSync(testFile, 'utf8')
  .split(/\r\n/)
  .map((line) => line.split('\n'))[0]
  .filter((line) => !!line);

// PART 1
function findDigits(line) {
    const firstDigit = line.match(/\d/)[0];
    const lastDigit = line.split("").reverse().join("").match(/\d/)[0];
    return +(firstDigit + lastDigit);
}

function getCalibrationValuePart1(input) {
    return input.reduce((acc, line) => {
        return acc + findDigits(line);
    }, 0)
}

// PART 2
function replaceSpelledDigits(line) {
    let result = '';
    while(line.length) {
      if (!isNaN(Number(line[0]))) {
        result += line[0];
      } else if (line.indexOf("zero") == 0) {
        result += "0";
      } else if (line.indexOf("one") == 0) {
        result += "1";
      } else if (line.indexOf("two") == 0) {
        result += "2";
      } else if (line.indexOf("three") == 0) {
        result += "3";
      } else if (line.indexOf("four") == 0) {
        result += "4";
      } else if (line.indexOf("five") == 0) {
        result += "5";
      } else if (line.indexOf("six") == 0) {
        result += "6";
      } else if (line.indexOf("seven") == 0) {
        result += "7";
      } else if (line.indexOf("eight") == 0) {
        result += "8";
      } else if (line.indexOf("nine") == 0) {
        result += "9";
      }
      line = line.substring(1);
    }
    return result;
}

function getCalibrationValuePart2(input) {
    return input.reduce((acc, line) => {
        return acc + findDigits(replaceSpelledDigits(line));
    }, 0)
}

console.log('For:', testFile, input);
console.log('Part 1 - result is:', getCalibrationValuePart1(input));
console.log('Part 2 - result is:', getCalibrationValuePart2(input));
