const file = await Deno.readTextFile("./input.txt");

const ruckSackGroups = groupByN(3, file.split("\n"));

function calculatePriority(ruckSack: string[]) {
  const lower_case_alphabet = "abcdefghijklmnopqrstuvwxyz";
  const upper_case_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let commonItem = "";
  let priority = 0;

  const first_compartment = ruckSack[0];
  const second_compartment = ruckSack[1];
  const third_compartment = ruckSack[2];

  for (let i = 0; i < first_compartment.length; i++) {
    if (
      second_compartment.includes(first_compartment[i]) &&
      third_compartment.includes(first_compartment[i])
    ) {
      commonItem = first_compartment[i];
      break;
    }
  }

  if (commonItem === "") {
    return 0;
  }

  if (lower_case_alphabet.includes(commonItem)) {
    priority += lower_case_alphabet.indexOf(commonItem) + 1;
  }

  if (upper_case_alphabet.includes(commonItem)) {
    priority += upper_case_alphabet.indexOf(commonItem) + 1 + 26;
  }

  return priority;
}

function groupByN(n: number, data: string[]) {
  let result = [];
  for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
  return result;
}

const priorities = ruckSackGroups.map((ruckSack) =>
  calculatePriority(ruckSack)
);

// sum of all priorities

const sum = priorities.reduce((a, b) => a + b, 0);

console.log(sum);
