export const convert = number => {
  let result = [];
  if (number % 3 === 0) {
    result.push("Pling");
  }
  if (number % 5 === 0) {
    result.push("Plang");
  }
  if (number % 7 === 0) {
    result.push("Plong");
  }
  if (result.length === 0) {
    result.push(number.toString());
  }
  return result.join("");
};

// let n = 30;
// convert(n);
