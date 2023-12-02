import { getMaxValues, parseNumber } from "./utils";
import { getLines, getSumOfValues } from "../utils";
import { input } from "./taskInput";

const games = getLines(input);

const filteredGameIds = games
  .map((game) => {
    const gameId = parseNumber(game.substring(0, game.indexOf(":")));
    const maxGameValues = getMaxValues(game);

    return maxGameValues["red"] <= 12 &&
      maxGameValues["green"] <= 13 &&
      maxGameValues["blue"] <= 14
      ? gameId
      : null;
  })
  .filter((el) => el) as number[];

const sumOfIds = getSumOfValues(filteredGameIds);

console.log("Task 1 result", sumOfIds);
