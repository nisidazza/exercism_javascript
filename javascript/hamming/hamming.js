//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (str1, str2) => {  
  if (str1 === "" && str2 !== "") {
    throw new Error("left strand must not be empty");
  }
  if (str1 !== ""  && str2 === "" ) {
    throw new Error("right strand must not be empty");
  }
  if (str1.length !== str2.length) {
    throw new Error("left and right strands must be of equal length");
  }

  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  return count;
};

let string1 = "A";
let string2 = "B";
compute(string1, string2);
