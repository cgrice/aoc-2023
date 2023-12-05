const fs = require('fs')

const getFile = async (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        })
    })
}

module.exports = getFile