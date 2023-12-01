import { input } from "./taskInput";

const inputLines = input.split("\n");

const nums = inputLines.map((line) => {
  const lineNums = line.replace(/\D/g, "");
  if (lineNums.length === 1) {
    return Number(`${lineNums}${lineNums}`);
  } else {
    return Number(`${lineNums[0]}${lineNums[lineNums.length - 1]}`);
  }
});

const numsSummed = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Task 1 result", numsSummed);
