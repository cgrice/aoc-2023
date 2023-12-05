const detect = require('./detect')

describe('detect', () => {
    it('finds all coordinates for symbols', async () => {
        const grid = [
            ['.', '.', '.', '.'],
            ['.', '@', '.', '.'],
            ['#', '.', '.', '&'],
            ['.', '*', '.', '4'],
        ];

        const positions = detect(grid)

        expect(positions.symbols).toEqual([
            [1, 1], [2, 0], [2, 3], [3, 1]
        ])
    })

    it('finds all numbers and indexes them in the grid', async () => {
        const grid = [
            ['1', '.', '.', '.'],
            ['.', '.', '3', '.'],
            ['.', '.', '.', '.'],
            ['.', '.', '.', '4'],
        ];

        const positions = detect(grid)

        expect(positions.numbers).toEqual({
            0: {
                value: 1
            },
            1: {
                value: 3
            },
            2: {
                value: 4
            },
        })

        expect(positions.grid).toEqual([
            [0, '.', '.', '.'],
            ['.', '.', 1, '.'],
            ['.', '.', '.', '.'],
            ['.', '.', '.', 2],
        ])
    })

    it('finds longer numbers and indexes them in the grid', async () => {
        const grid = [
            ['1', '2', '3', '.'],
            ['.', '4', '3', '.'],
            ['8', '.', '.', '.'],
            ['.', '.', '2', '4'],
        ];

        const positions = detect(grid)

        expect(positions.numbers).toEqual({
            0: {
                value: 123
            },
            1: {
                value: 43
            },
            2: {
                value: 8
            },
            3: {
                value: 24
            },
        })

        expect(positions.grid).toEqual([
            [0, 0, 0, '.'],
            ['.', 1, 1, '.'],
            [2, '.', '.', '.'],
            ['.', '.', 3, 3],
        ])
    })
})