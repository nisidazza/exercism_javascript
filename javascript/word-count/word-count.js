export const countWords = phrase => {
  let cleanedPhrase = phrase
    .trim()
    .toLowerCase()
    .replace(/[./#!$%^&*;:{}=\-_`~()@?¡¿,\u0091]/g, " ")
    .replace(/\s+/g, "||");
  let wordsArr = cleanedPhrase.split("||");
  //console.log(wordsArr);
  let objWordsCount = {};
  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    //console.log(word);
    if (word !== "") {
      if (!objWordsCount[word]) {
        objWordsCount[word] = 1;
      } else {
        objWordsCount[word]++;
      }
    }
  }
  return objWordsCount;
};

// export const countWords = phrase => {
//   let map = {};
//   phrase
//     .trim()
//     .toLowerCase()
//     .split(/[ ,\n]+/g)
//     .forEach(element => {
//       element = element.replace(/[.,!:"&@$%^]|^'|'$/g, "");
//       if (element) {
//         if (Object.prototype.hasOwnProperty.call(map, element)) {
//           map[element]++;
//         } else {
//           map[element] = 1;
//         }
//       }
//     });
//   return map;
// };

let s = "car: carpet as java: javascript!!&@$%^&";
console.log(countWords(s));
