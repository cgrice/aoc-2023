const maximums = (game) => {
    return game.rounds.reduce(
        (acc, curr) => {
            Object.keys(curr).forEach(
                colour => {
                    if (curr[colour] > acc[colour]) {
                        acc[colour] = curr[colour];
                    }
                }
            )
            return acc
        }, { red: 0, green: 0, blue: 0 }
    )
}

module.exports = maximums;