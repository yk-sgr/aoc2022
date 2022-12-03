const input = await Deno.readTextFile("input.txt");

const rucksacks = input.split("\n");

const rucksackCompartments = rucksacks.map((rucksack) => [rucksack.substring(0, (rucksack.length / 2)), rucksack.substring((rucksack.length / 2))]);

const findCommonLetter = (s1: string, s2: string): string => {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      return s1[i];
    }
  }
  return "";
};

const getPriority = (letter: string) => {
  const isUppercase = new RegExp("[A-Z]").test(letter);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return isUppercase ? alphabet.indexOf(letter.toLowerCase()) + 27 : alphabet.indexOf(letter.toLowerCase()) + 1;
}

const score = rucksackCompartments.map((rucksackCompartment) => {
  return getPriority(findCommonLetter(rucksackCompartment[0], rucksackCompartment[1]));
}).reduce((a, b) => a + b);

console.log(score);