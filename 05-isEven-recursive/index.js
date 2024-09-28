const isEven = (num) => {
  const usedNumber = num < 0 ? -num : num;
  if(usedNumber === 0) return true;
  else if(usedNumber === 1) return false;
  else return isEven(usedNumber - 2);
}

console.log(isEven(-20927)); 