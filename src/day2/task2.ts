import { getMaxValues, getSumOfValues } from "./utils";
import { getLines } from "../utils";
import { input } from "./taskInput";

const games = getLines(input);

const powerValues = games
  .map((game) => {
    const rolls = game.substring(game.indexOf(":") + 2).split("; ");
    const maxGameValues = getMaxValues(rolls);

    return maxGameValues.red * maxGameValues.green * maxGameValues.blue;
  })
  .filter((el) => el !== null) as number[];

const sumOfPowers = getSumOfValues(powerValues);

console.log(sumOfPowers);
