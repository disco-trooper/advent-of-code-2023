export const getMaxValues = (rolls: string[]): Record<string, number> => {
  const maxGameValues: Record<string, number> = {
    red: 0,
    green: 0,
    blue: 0,
  };

  rolls.forEach((roll) => {
    const cubes = roll.split(", ");

    cubes.forEach((cube) => {
      const number = Number(cube.replace(/\D/g, ""));
      const color = cube.substring(cube.indexOf(" ")).trim();

      maxGameValues[color] =
        maxGameValues[color] < number ? number : maxGameValues[color];
    });
  });

  return maxGameValues;
};

export const getSumOfValues = (values: number[]): number => {
  return values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};
