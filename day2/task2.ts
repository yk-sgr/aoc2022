const input = await Deno.readTextFile("input.txt");

const shapes = [
  {
    letters: "A",
    score: 1,
    defeats: "C"
  },
  {
    letters: "B",
    score: 2,
    defeats: "A"
  },
  {
    letters: "C",
    score: 3,
    defeats: "B"
  }
];

const fullRound = input.split("\n");

const rounds = fullRound.map((round) => round.split(" "));

let score = 0;

rounds.forEach((round) => {
  const opp = shapes.find((shape) => shape.letters.includes(round[0]))!;
  switch (round[1]) {
    case "X": {
      const mineX = shapes.find((shape) => shape.letters.includes(opp.defeats))!;
      score += mineX.score;
      break;
    }
    case "Y": {
      score += opp.score + 3;
      break;
    }
    case "Z": {
      const mineZ = shapes.find((shape) => shape.defeats.includes(round[0]))!;
      score += mineZ.score + 6;
      break;
    }
  }
});

console.log(score);