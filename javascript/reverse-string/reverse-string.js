//-- SOLUTION 1 --
export const reverseString = string => {
  let reverseStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }
  return reverseStr;
};

let str = 'a word'
reverseString(str)


