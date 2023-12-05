const getfile = require('./getfile')
const parse = require('./parse')
const detect = require('./detect')

const run = async () => {
    const input = await getfile('./puzzle.txt')

    const grid = parse(input)
    const indexed = detect(grid)

    const adjacent = indexed.symbols.map(
        symbol => neighbours(symbol[0], symbol[1])
    )

    const matches = adjacent.map(
        coords => coords.map(
            coord => indexed.grid[coord[0]][coord[1]]
        )
    )

    const indexes = matches.reduce(
        (acc, curr) => {
            return [
                ...acc,
                ...curr.filter(i => !isNaN(i))
            ]
        }, []
    )

    const numbers = new Set(indexes.map(
        index => indexed.numbers[index]
    ))

    const total = Array.from(numbers).reduce(
        (acc, curr) => {
        return acc + curr.value
        }, 0
    );

    console.log(total)
}

const neighbours = (y, x) => {
    return [
        [y - 1, x - 1],
        [y - 1, x],
        [y - 1, x + 1],
        [y, x - 1],
        [y, x + 1],
        [y + 1, x - 1],
        [y + 1, x],
        [y + 1, x + 1],
    ]
}

run()