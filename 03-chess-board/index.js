const main = (size) => {
  let string = ''
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      (i + j) % 2 ? string += '#' : string += ' '
    }
    string += '\n'
  }
  console.log(string)
}

main(process.argv[2])