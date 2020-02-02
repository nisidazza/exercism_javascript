export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];


// -- SOLUTION 1 --
export const colorCode = (color) => {
  let i = 0
  while (i < COLORS.length) {
    if (color == COLORS[i]) {
      return i
    }
    i++
  }
  return -1
};


// -- SOLUTION 2 --
// export const colorCode = (color) => {
//   let number = COLORS.indexOf(color)
//   return number
// };



