import { getMaxValues, getRolls } from "./utils";
import { getLines, getSumOfValues } from "../utils";
import { input } from "./taskInput";

const games = getLines(input);
const powerValues = games
  .map((game) => {
    const rolls = getRolls(game);
    const maxGameValues = getMaxValues(rolls);
    return maxGameValues.red * maxGameValues.green * maxGameValues.blue;
  })
  .filter((el) => el) as number[];
const sumOfPowers = getSumOfValues(powerValues);

console.log("Task 2 result", sumOfPowers);
