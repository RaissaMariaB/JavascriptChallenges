//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    const newArray = []
    for(let i=0; i < string.length; i++){
      newArray.push([string[i]])
    }
    this.rows = newArray
  }

  get rows() {
    return this.rows;
  }

  get columns() {
    throw new Error("Remove this statement and implement this function");
  }
}
