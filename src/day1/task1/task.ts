import { input } from "./taskInput";

// Split the lines
const inputLines = input.split("\n");

// Create array consisting of 1st and last number of each line
const nums = inputLines.map((line) => {
  const lineNums = line.replace(/\D/g, "");
  if (lineNums.length === 1) {
    return Number(`${lineNums}${lineNums}`);
  } else {
    return Number(`${lineNums[0]}${lineNums[lineNums.length - 1]}`);
  }
});

// Sum it
const numsSummed = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(numsSummed);
