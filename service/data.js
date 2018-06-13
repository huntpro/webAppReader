const fs = require('fs')

exports.getHotData = () => {
    return fs.readFileSync('./mock/hot.json', 'utf-8')
}

exports.getBookData = (id = 18218) => {
    const filePath = `./mock/book/${id}.json`
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath)
    }
    return fs.readFileSync('./mock/book/18218.json', 'utf-8')
}