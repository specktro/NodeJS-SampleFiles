import {getPokemonById} from '../../src/js-foundation/06-promises'

describe('06-promises', () => {
    test('getPokemonById should return a pokemon', async () => {
        // GIVEN
        const pokemonId = 1
        const expectedPokemonName = 'bulbasaur'

        // WHEN
        const pokemonName = await getPokemonById(pokemonId)

        // THEN
        expect(pokemonName).toBe(expectedPokemonName)
    })

    test('getPokemonById should return an error', async () => {
        const pokemonId = 10000000

        try {
            const pokemonName = await getPokemonById(pokemonId)
            expect(true).toBeFalsy()
        } catch (error) {
            expect(error).toBe(`Pokemon with id: ${pokemonId} does not exist`)
        }
    })
})