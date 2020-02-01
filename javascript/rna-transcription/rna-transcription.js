//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// const transcribedRna = {
//   G: "C",
//   C: "G",
//   T: "A",
//   A: "U"
// }


// export const toRna = (rnaSequence) => {
//   let dnaSequence = rnaSequence
//     .split('')
//     .map(dnaNucleotide => transcribedRna[dnaNucleotide])
//     .join('')
//   return dnaSequence
// }

export const toRna = (dna) => {
  let rnaString = []
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'G':
        rnaString.push('C');
        break;
      case 'C':
        rnaString.push('G');
        break;
      case 'T':
        rnaString.push('A');
        break;
      case 'A':
        rnaString.push('U');
        break;
    }
  }
  let result = rnaString.join('')
  return result
}

let x = 'T'
toRna(x)
