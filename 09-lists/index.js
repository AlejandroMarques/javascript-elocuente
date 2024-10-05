const arrayToList = (array) => {
  const value = array[0];
  const rest = array.slice(1);
  return { value, rest: rest.length > 0 ? arrayToList(rest) : null };
};

const listToArray = (list) => {
  const result = []
  while (list) {
    result.push(list.value);
    list = list.rest;
  }
  return result
}

const prepend = (value, list) => {
  return { value, rest: list}
}

const nth = (list, index) => {
  if (index === 0) return list.value;
  else if (list.rest === null) return undefined;
  else return nth(list.rest, index - 1);
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
