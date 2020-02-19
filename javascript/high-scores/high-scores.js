//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.myScores = input;
  }

  get scores() {
    return this.myScores;
  }

  get latest() {
    return this.myScores[this.myScores.length - 1];
  }

  get personalBest() {
    let sortedArr = this.myScores.sort(function(a, b) {
      return b - a;
    });
    return sortedArr[0];
  }

  get personalTopThree() {
    let sortedArr = this.myScores.sort(function(a, b) {
      return b - a;
    });
    let topThreeArr = [];
    for (let i = 0; i < sortedArr.length; i++) {
      if(i < 3) {
        topThreeArr.push(sortedArr[i])
      } else {
        break;
      }

    }
    return topThreeArr
  }
}

let my_scores = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
new HighScores(my_scores).personalTopThree;
