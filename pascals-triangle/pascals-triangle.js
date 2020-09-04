//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (row) => {
  let a = []
  if (row >= 1) {
    a[0] = [1];
  }

  if (row >= 2) {
    a[1] = [1,1]
  }

  for(let i=2; i < row; i++){
    a[i] = [1]
    for(let j=1; j < i; j++){
      a[i][j] = a[i - 1][j - 1] + a[i - 1][j]
      console.log("i", i, "j", j, "a", a)
    }
    a[i].push(1)
    console.log(a)
  }

  return a
};
