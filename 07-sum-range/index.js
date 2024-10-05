const sum = (numbers) => {
  let total = 0;
  for (const number of  numbers) {
    total += number
  }
  return total;
}

const range = (start, end, step = 1) => {
  const numbers = [];
  if (step > 0 ) for (let i = start; i <= end; i += step) numbers.push(i);
  else for (let i = start; i >= end; i += step) numbers.push(i);
  return numbers;
}

console.log(sum(range(5, 2, -1)))