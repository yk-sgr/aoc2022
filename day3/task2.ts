const input = await Deno.readTextFile("input.txt");

const rucksacks = input.split("\n");

const groups = [[]] as string[][];

for (let i = 0, j = 0; i < rucksacks.length; i++) {
  if (i >= 3 && i % 3 === 0) {
    j++;
  }
  groups[j] = groups[j] || [];
  groups[j].push(rucksacks[i]);
}

const getPriority = (letter: string) => {
  const isUppercase = new RegExp("[A-Z]").test(letter);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return isUppercase ? alphabet.indexOf(letter.toLowerCase()) + 27 : alphabet.indexOf(letter.toLowerCase()) + 1;
}

const findCommonLetter = (s1: string, s2: string, s3: string): string => {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i]) && s3.includes(s1[i])) {
      return s1[i];
    }
  }
  return "";
};

const score = groups.map((group) => {
  return getPriority(findCommonLetter(group[0], group[1], group[2]));
}).reduce((a, b) => a + b);

console.log(score);