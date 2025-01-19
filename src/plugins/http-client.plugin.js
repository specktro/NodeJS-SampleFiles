const axios = require('axios')

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url)
        // const response = await fetch(url)
        // const data = await response.json()
        return data
    },
    post: async (url, body) => { },
    put: async (url, body) => { },
    delete: async (url) => { },
}

module.exports = { httpClientPlugin }