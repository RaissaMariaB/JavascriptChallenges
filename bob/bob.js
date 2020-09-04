//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if(message.trim() === ''){
    return 'Fine. Be that way!'
  } else if(message.toUpperCase() === message){
    for(let i=0; i<message.length; i++){
      if (message[i].toUpperCase() != message[i].toLowerCase()) {
        if(message.endsWith('?')){
          return 'Calm down, I know what I\'m doing!'
        }
        return 'Whoa, chill out!'
      }
    }
    return message.endsWith('?') ? 'Sure.' : 'Whatever.'
  }else if(message.trim().endsWith('?')){
    return 'Sure.'
  }
  return 'Whatever.'
};

