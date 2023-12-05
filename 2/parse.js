const parse = (input) => {
    const game = parseInt(input.match(/Game\s(\d+):/)[1])
    const parts = input.split(':')
    const rounds = parts[1].split(';')
    const parsedRounds = parseRounds(rounds)

    return {
        id: game,
        rounds: parsedRounds
    };
}

// takes each line of the game (1 red, 2 blue; etc) and turns it 
// into an object with each colour as the key, and the total as the value
const parseRounds = (rounds) => {
    return rounds.map(
        round => {
            const colours = round.split(',')
            const rounds = colours.map(colour => {
                const match = colour.match(/(\d+)\s(\w+)/);
                return { [match[2]]: parseInt(match[1]) }
            }).reduce(function(result, current) {
                return Object.assign(result, current);
            }, {});

            return rounds;
        }
    )
}

module.exports = parse