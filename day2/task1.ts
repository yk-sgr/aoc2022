const input = await Deno.readTextFile("input.txt");

const shapes = [
  {
    letters: ["A", "X"],
    score: 1,
    defeats: ["C", "Z"]
  },
  {
    letters: ["B", "Y"],
    score: 2,
    defeats: ["A", "X"]
  },
  {
    letters: ["C", "Z"],
    score: 3,
    defeats: ["B", "Y"]
  }
];


const shapeByLetter = (letter: string) => {
  return shapes.find((shape) => shape.letters.includes(letter))!;
}

const fullRound = input.split("\n");

const rounds = fullRound.map((round) => round.split(" "));

let score = 0;

rounds.forEach((round) => {
  const shape1 = shapeByLetter(round[0]);
  const shape2 = shapeByLetter(round[1]);
  if (shape1 === shape2) {
    score += shape2?.score + 3;
    console.log("Draw: " + round);
  } else if (shape2.defeats.includes(shape1.letters[0]) || shape2.letters.includes(shape1.letters[1])) {
    score += shape2.score + 6;
    console.log("Win: " + round);
  } else {
    score += shape2.score;
    console.log("Loose: " + round);
  }
});

console.log(score);