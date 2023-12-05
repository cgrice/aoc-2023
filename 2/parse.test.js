const parse = require('./parse')

describe('parse', () => {
    it('can detect game numbers', () => {
        const input = "Game 2: 1 red, 2 blue; 2 red, 3 blue, 5 green";

        const game = parse(input)

        expect(game).toMatchObject({
            id: 2,
        })
    })

    it('can detect rounds', () => {
        const input = "Game 2: 1 red, 2 blue; 2 red, 3 blue, 5 green";

        const game = parse(input)

        expect(game).toMatchObject({
            rounds: [
                { red: 1, blue: 2 },
                { red: 2, blue: 3, green: 5 },
            ]
        })
    })
})