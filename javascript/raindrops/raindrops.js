
export const convert = number => {
  let result = "";
  let pling = "";
  let plang = "";
  let plong = "";
  if (number % 3 === 0) {
    pling += "Pling";
  }
  if (number % 5 === 0) {
    plang += "Plang";
  }
  if (number % 7 === 0) {
    plong += "Plong";
  } else {
    result += number.toString();
  }
  return pling + plang + plong || result;
};

// let n = 30;
// convert(n);
