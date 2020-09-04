//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaSequence) => {
  let rna = ""
  for (let i = 0; i < dnaSequence.length; i++) {
    if(dnaSequence[i] === "C"){
      rna = rna + "G"
    }else if(dnaSequence[i] === "G"){
      rna = rna + "C"
    }else if(dnaSequence[i] === "T"){
      rna = rna + "A"
    }else if(dnaSequence[i] === "A"){
      rna = rna + "U"
    }
  }
  return rna
};

