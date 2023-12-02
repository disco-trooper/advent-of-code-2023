import { getMaxValues } from "./utils";
import { getLines, getSumOfValues } from "../utils";
import { input } from "./taskInput";

const games = getLines(input);

const powerValues = games
  .map((game) => {
    const maxGameValues = getMaxValues(game);
    return maxGameValues.red * maxGameValues.green * maxGameValues.blue;
  })
  .filter((el) => el) as number[];

const sumOfPowers = getSumOfValues(powerValues);

console.log("Task 2 result", sumOfPowers);
