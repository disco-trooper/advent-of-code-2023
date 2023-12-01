import { input } from "./taskInput";

const inputLines = input.split("\n");

const alphaNumDict: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const realNums: number[] = [];

inputLines.map((line) => {
  const locations: Record<string, { first: any; last: any }> = {
    "1": { first: null, last: null },
    "2": { first: null, last: null },
    "3": { first: null, last: null },
    "4": { first: null, last: null },
    "5": { first: null, last: null },
    "6": { first: null, last: null },
    "7": { first: null, last: null },
    "8": { first: null, last: null },
    "9": { first: null, last: null },
    one: { first: null, last: null },
    two: { first: null, last: null },
    three: { first: null, last: null },
    four: { first: null, last: null },
    five: { first: null, last: null },
    six: { first: null, last: null },
    seven: { first: null, last: null },
    eight: { first: null, last: null },
    nine: { first: null, last: null },
  };

  const locationKeys = Object.keys(locations);
  locationKeys.forEach((key) => {
    locations[key]["first"] = line.indexOf(key);
    locations[key]["last"] = line.lastIndexOf(key);
  });

  const firstAndLastValues: Record<string, any> = {
    firstValue: null,
    firstValueLocation: Number.POSITIVE_INFINITY,
    lastValue: null,
    lastValueLocation: Number.NEGATIVE_INFINITY,
  };

  Object.keys(locations).forEach((key) => {
    const firstLocation = locations[key]["first"];
    if (
      firstLocation < firstAndLastValues.firstValueLocation &&
      firstLocation > -1
    ) {
      firstAndLastValues.firstValueLocation = firstLocation;
      firstAndLastValues.firstValue = alphaNumDict[key]
        ? alphaNumDict[key]
        : key;
    }

    const lastLocation = locations[key]["last"];
    if (
      lastLocation > firstAndLastValues.lastValueLocation &&
      lastLocation > -1
    ) {
      firstAndLastValues.lastValueLocation = lastLocation;

      firstAndLastValues.lastValue = alphaNumDict[key]
        ? alphaNumDict[key]
        : key;
    }
  });

  realNums.push(
    Number(`${firstAndLastValues.firstValue}${firstAndLastValues.lastValue}`)
  );
});

const realNumsSummed = realNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Task 2 result", realNumsSummed);
