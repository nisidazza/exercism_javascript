//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrixArr = matrix.split('\n')  
      .map(row => row.split(' ')
        .map(Number)) // Calls Number on each value in the array (casting it to a number) and returns the array of results
  }

  get rows() {
   return this.matrixArr
  }

  get columns() {
    let getColumns = this.matrixArr[0]
      .map((col, index) => this.matrixArr
        .map(row => row[index])
      )
    return getColumns
  }

}

new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6').columns[3]


