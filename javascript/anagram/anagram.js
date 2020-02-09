//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (mainWord, wordsArr) => {
  let sublist = [];
  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    if (mainWord.length !== word.length) {
      continue;
    } else {
      if (checkLetters(mainWord, word)) {
        sublist.push(word);
      }
    }
  }
  return sublist;
};

const checkLetters = (mainWord, word) => {
  let tempMainWord = mainWord.toLowerCase();
  let tempWord = word.toLowerCase();
  if(tempMainWord === tempWord) {
    return false
  }
  for (let i = 0; i < tempWord.length; i++) {
    if (tempMainWord.includes(tempWord[i])) {      
      tempMainWord = tempMainWord.replace(tempWord[i], '')
    }else {
      return false
    }
  }
  return true;
};

let x = "master";
let y = ["stream", "pigeon", "maters"];
findAnagrams(x, y);
