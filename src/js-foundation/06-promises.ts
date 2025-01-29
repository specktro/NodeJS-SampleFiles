const { httpClientPlugin } = require('../plugins')

export const getPokemonById = async (id: number): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    try {
        const pokemon = await httpClientPlugin.get(url)
        return pokemon.name
    } catch (error) {
        throw `Pokemon with id: ${id} does not exist`
    }
}