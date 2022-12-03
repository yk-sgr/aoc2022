const input = await Deno.readTextFile("input.txt");

const elves = input.split("\n\n");

const elveCalories = elves.map((elve) => elve.split("\n").map((calorie) => parseInt(calorie)).reduce((a, b) => a+b)).sort((a, b) => b - a);

console.log(elveCalories[0]);
console.log(elveCalories[0] + elveCalories[1] + elveCalories[2]);