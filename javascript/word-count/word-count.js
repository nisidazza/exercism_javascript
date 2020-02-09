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
    let word = wordsArr[i].replace(/(^')|('$)/g, "");
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
console.log(countWords(s));
