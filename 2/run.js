const fs = require('fs');
const parse = require('./parse');
const max = require('./maximums');
const pow = require('./power');


const getFile = async (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        })
    })
}

const MAX_RED = 12
const MAX_GREEN = 13
const MAX_BLUE = 14

const run = async () => {
    const input = await getFile('./puzzle.txt');

    const games = input.split('\n').map(
        line => parse(line)
    );

    const maximums = games.map(
        game => ({
            ...game,
            maximums: max(game),
            power: pow(max(game))
        })
    )
    
    // Solution to part one - only count ones that were possible based on given maximums
    const possible = maximums.filter(
        game => game.maximums.green <= MAX_GREEN && game.maximums.red <= MAX_RED && game.maximums.blue <= MAX_BLUE
    )

    const result = possible.reduce(
        (acc, curr) => {
            return acc + curr.id
        }, 0
    )

    // Solution to part two - add up the sum of the powers for each game 
    const sumOfPowers = maximums.reduce(
        (acc, curr) => {
            return acc + curr.power
        }, 0
    )

    console.log(result, sumOfPowers)
}

run();