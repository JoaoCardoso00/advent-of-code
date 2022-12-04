const file = await Deno.readTextFile("./input.txt");

const formattedArray = formatArray(file);
const caloriesArray: number[] = [];

formattedArray.forEach((array) => {
  caloriesArray.push(sumCalories(array));
});

console.log(
  caloriesArray
    .sort((a, b) => a - b)
    .splice(caloriesArray.length - 3, caloriesArray.length)
    .reduce((acc, curr) => acc + curr, 0)
);

function formatArray(input: string) {
  const inputArray = input.split("\n");
  const resultArray: Array<string[]> = [];
  let tempArray: string[] = [];

  inputArray.forEach((calories) => {
    if (calories == "") {
      resultArray.push(tempArray);
      tempArray = [];
    } else {
      tempArray.push(calories);
    }
  });

  return resultArray;
}

function sumCalories(Array: string[]) {
  return Array.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
}
