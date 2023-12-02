import { getLines, getStringDigitsFromString, getSumOfValues } from "../utils";
import { input } from "./taskInput";

const inputLines = getLines(input);

const nums = inputLines.map((line) => {
  const lineNums = getStringDigitsFromString(line);

  if (lineNums.length === 1) {
    return Number(`${lineNums}${lineNums}`);
  } else {
    return Number(`${lineNums[0]}${lineNums[lineNums.length - 1]}`);
  }
});

const numsSummed = getSumOfValues(nums);

console.log("Task 1 result", numsSummed);
