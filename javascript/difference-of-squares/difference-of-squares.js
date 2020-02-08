//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(naturalNumber) {
    this.n = naturalNumber;
  }

  get sumOfSquares() {
    let sumSquare = 0;
    for (let i = 1; i <= this.n; i++) {
      sumSquare += i * i;
    }
    return sumSquare;
  }

  get squareOfSum() {
    let sum = 0;
    let squareSum;
    for (let i = 1; i <= this.n; i++) {
      sum += i;
      squareSum = sum * sum;
    }
    return squareSum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
