const parse = (text) => {
    return text.split('\n').map(
        line => line.split("")
    )
}

module.exports = parse