const file = await Deno.readTextFile("./input.txt");

type SectionPairs = {
  first_section: number[];
  second_section: number[];
};

function formatSectionPairs(section_pairs: string): SectionPairs[] {
  const pairs = section_pairs.split("\n").map((pair) => pair.split(","));

  const formatted_pairs = pairs.map((pair) => {
    return {
      first_section: pair[0].split("-").map((number) => parseInt(number)),
      second_section: pair[1].split("-").map((number) => parseInt(number)),
    };
  });

  return formatted_pairs;
}

const formatted_pairs = formatSectionPairs(file);

let pairs_inside_one_another_count = 0;

formatted_pairs.forEach((pair) => {
  if (checkIfPairsOverlap(pair)) {
    pairs_inside_one_another_count++;
  }
});

console.log(pairs_inside_one_another_count);

function checkIfPairsOverlap(pair: SectionPairs): boolean {
  const first_section = pair.first_section;
  const second_section = pair.second_section;

  if (
    first_section[0] > second_section[1] ||
    first_section[1] < second_section[0]
  ) {
    return false;
  } else {
    return true;
  }
}
