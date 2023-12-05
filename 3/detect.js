const detect = (grid) => {
    const symbols = []
    const numbers = {}

    for (var y in grid) {
        for (var x in grid[y]) {
            if (grid[y][x] !== '.' && isNaN(grid[y][x])) {
                symbols.push([parseInt(y), parseInt(x)])
            }
        }
    }
    
    let index = 0;

    for (var y in grid) {
        let found = false
        let number = ''

        for (var x in grid[y]) {
            if (!isNaN(grid[y][x])) {
                number += grid[y][x]
                grid[y][x] = index
                found = true
            } else if (found) {
                numbers[index] = {
                    value: parseInt(number)
                }
                index++;

                found = false
                number = ''
            }
            
            if (found && x == grid[y].length - 1) {
                numbers[index] = {
                    value: parseInt(number)
                }
                index++
            }
        }
    }

    return {
        symbols,
        numbers,
        grid,
    }
}

module.exports = detect