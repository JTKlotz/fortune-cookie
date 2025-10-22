const fortunes = require('./fortunes.json') 

const getFortune = () => {
    const fortune = fortunes[Math.floor(Math.random() * 10)]
    return fortune
}

module.exports = getFortune