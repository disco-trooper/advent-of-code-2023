import { input } from "./taskInput";

const games = input.split("\n");

const MAX_RED_COUNT = 12;
const MAX_GREEN_COUNT = 13;
const MAX_BLUE_COUNT = 14;

const filteredGameIds = games
  .map((game) => {
    const maxGameValues: Record<string, number> = {
      red: 0,
      green: 0,
      blue: 0,
    };
    const gameId = Number(
      game.substring(0, game.indexOf(":")).replace(/\D/g, "")
    );
    const rolls = game.substring(game.indexOf(":") + 2).split("; ");

    rolls.forEach((roll) => {
      const cubes = roll.split(", ");
      cubes.forEach((cube) => {
        const number = Number(cube.replace(/\D/g, ""));
        const color = cube.substring(cube.indexOf(" ")).trim();

        maxGameValues[color] =
          maxGameValues[color] < number ? number : maxGameValues[color];
      });
    });

    return maxGameValues["red"] <= MAX_RED_COUNT &&
      maxGameValues["green"] <= MAX_GREEN_COUNT &&
      maxGameValues["blue"] <= MAX_BLUE_COUNT
      ? gameId
      : null;
  })
  .filter((el) => el !== null);

const sumOfIds = filteredGameIds.reduce((accumulator, currentValue) => {
  return accumulator! + currentValue!;
}, 0);

console.log(sumOfIds);
