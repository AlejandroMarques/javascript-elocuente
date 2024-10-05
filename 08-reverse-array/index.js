const reverseArray = (arr) => {
  let reversed = []
  for (const entry of arr) {
    reversed.unshift(entry)
  }
  return reversed
}

const reverseArrayInPlace = (arr) => {
  for (let index = 0; Math.floor(index < arr.length/2); index++) {
    const entry = arr[index]
    arr[index] = arr[arr.length - 1 - index]
    arr[arr.length - 1 - index] = entry
  }
  return arr
}

console.log(reverseArrayInPlace([1, 2, 3]))