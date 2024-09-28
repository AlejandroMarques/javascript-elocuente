const main = () => {
  let string = '#'
  do {
    console.log(string)
    string += '#'
  } while (string.length <= 7);
}

main()