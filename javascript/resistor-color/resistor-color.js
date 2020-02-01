//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const colorCode = (color) => {
  let i = 0
  while (i < COLORS.length) {
    // for (let i = 0; i < COLORS.length; i++) {
    if (color == COLORS[i]) {
      return i
    }
    i++
  }
  return -1
};



