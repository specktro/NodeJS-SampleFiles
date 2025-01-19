const { httpClientPlugin } = require('../plugins')

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    // return fetch(url)
    //     .then(response => response.json())
        // .then(() => {
        //     throw new Error('Pokemon does not exist')
        // })
        // .then(pokemon => pokemon.name)

    const pokemon = await httpClientPlugin.get(url)
    return pokemon.name
}

module.exports = getPokemonById