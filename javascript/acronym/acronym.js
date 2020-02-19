//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = phrase => {
  let acronym = phrase
    .replace(/[^A-Za-z,']/g, " ")
    .toUpperCase()
    .split(" ")
    .map(word => word[0])
    .join("");
  return acronym;
};

let a = "Halley's Comet";
parse(a);
