import { input } from "./taskInput";

const games = input.split("\n");

const powerValues = games
  .map((game) => {
    const maxGameValues: Record<string, number> = {
      red: 0,
      green: 0,
      blue: 0,
    };
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

    return maxGameValues.red * maxGameValues.green * maxGameValues.blue;
  })
  .filter((el) => el !== null) as number[];

const sumOfPowers = powerValues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumOfPowers);
