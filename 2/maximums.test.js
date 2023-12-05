const maximums = require('./maximums')
const parse = require('./parse')

describe('maximums', () => {
    it('adds up the colours for a game', () => {
        const input = "Game 2: 1 red, 2 blue; 16 red, 3 blue, 5 green";
        const game = parse(input)
        const max = maximums(game)

        expect(max).toMatchObject({
            red: 16,
            blue: 3,
            green: 5
        })
    })
})