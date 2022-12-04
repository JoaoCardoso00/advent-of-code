const file = await Deno.readTextFile("./input.txt");
const plays = file.split("\n");

function checkRoundPoints(play: string) {
  const enemyPlay = play.split(" ")[0];
  const roundOutcome = play.split(" ")[1];
  let points = 0;

  const enemyPlays = { rock: "A", paper: "B", scissors: "C" };
  const roundOutcomes = { loss: "X", draw: "Y", win: "Z" };

  switch (enemyPlay) {
    // Rock
    case enemyPlays.rock:
      if (roundOutcome === roundOutcomes.draw) {
        // Tie = 1 for rock + 3 for draw
        points += 4;
      } else if (roundOutcome === roundOutcomes.win) {
        // Win = 2 for paper + 6 for win
        points += 8;
      } else if (roundOutcome === roundOutcomes.loss) {
        // Loss = 3 for scissors + 0 for loss
        points += 3;
      }
      break;

    // Paper
    case enemyPlays.paper:
      if (roundOutcome === roundOutcomes.loss) {
        // Loss = 1 for rock + 0 for loss
        points += 1;
      } else if (roundOutcome === roundOutcomes.draw) {
        // Draw = 2 for paper + 3 for draw
        points += 5;
      } else if (roundOutcome === roundOutcomes.win) {
        // Win = 3 for scissors + 6 for Win
        points += 9;
      }
      break;

    // Scissors
    case enemyPlays.scissors:
      if (roundOutcome === roundOutcomes.win) {
        // Win = 1 for rock + 6 for win
        points += 7;
      } else if (roundOutcome === roundOutcomes.loss) {
        // Loss = 2 for paper + 0 for loss
        points += 2;
      } else if (roundOutcome === roundOutcomes.draw) {
        // Draw = 3 for scissors + 3 for Draw
        points += 6;
      }
      break;

    default:
      break;
  }

  return points;
}

console.log(plays.map(checkRoundPoints).reduce((a, b) => a + b));
