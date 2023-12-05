const power = require('./power')

describe('power', () => {
    it('calculates the power of a set of cubes', () => {
        const game = {
            red: 4,
            blue: 6,
            green: 2
        }

        const result = power(game)

        expect(result).toBe(48)
    })

    it('can calculate with higher numbers', () => {
        const game = {
            red: 20,
            blue: 6,
            green: 13
        }

        const result = power(game)

        expect(result).toBe(1560)
    })
})