const fs = require('fs');
fs.readFile('./puzzle.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const replacements = {
    'one': 'o1e', 
    'two': 't2o', 
    'three': 't3e', 
    'four': 'f4r', 
    'five': 'f5e', 
    'six': 's6x', 
    'seven': 's7n', 
    'eight': 'e8t', 
    'nine': 'n9e'
  }

  const lines = data.split('\n')

  const numbers = lines
    .map(line => {
      let translated = line
      for(var number in replacements) {
        const re = new RegExp(number, 'g');
        translated = translated.replace(re, replacements[number])
      }
      return translated;
    })
    .map(
      line => line.split("").filter(char =>  {
        return !isNaN(char)
      })
    );

  const total = numbers
    .map(line => parseInt(line[0] + line[line.length-1]))
    .reduce(
      (acc, curr) => acc + curr,
      0,
    );

  console.log(total)
});
