//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  phrase = phrase.replace(/[^A-Za-z]/g, " ")
  console.log(phrase)
};

let a = 'Complementary metal-oxide semiconductor'
parse(a)
