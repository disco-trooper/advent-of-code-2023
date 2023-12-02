export const getLines = (input: string) => input.split("\n");

export const getSumOfValues = (values: number[]): number => {
  return values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

export const getStringDigitsFromString = (string: string): string => {
  return string.replace(/\D/g, "");
};
