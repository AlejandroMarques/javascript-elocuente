const countBs = (text) => {
  return countChar(text, 'B') 
}

const countChar = (text, char) => {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      count++;
    }
  }
  return count 
}
console.log(countBs("Banaas are be than aBpples")); 