const parse = require('./parse')
const getfile = require('./getfile')

describe('parse', () => {
    it('turns the text into a grid', async () => {
        const text = await getfile('./test.txt')
        
        const grid = parse(text)

        expect(grid.length).toBe(10)
        expect(Array.isArray(grid[0])).toBe(true)
        expect(grid[1].length).toBe(10)
    })
})