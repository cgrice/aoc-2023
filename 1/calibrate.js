const fs = require('fs');
fs.readFile('./puzzle.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n')
  const numbers = lines.map(
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
