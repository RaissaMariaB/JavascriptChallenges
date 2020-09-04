//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (pangram) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const pangramLowerCase = pangram.toLowerCase()

  if (!pangram) {
    return false
  } else {
    for (let i=0; i < alphabet.length; i++){
      if(!pangramLowerCase.includes(alphabet[i])){
        return false
      }
    }
  }
  return true
};
