const getAgePlugin = require('get-age')
const getAge = (birthdate) => {
    if (!birthdate) {
        return new Error('birthdate should not be null')
    }

    return getAgePlugin(birthdate)
}

module.exports = { getAge }