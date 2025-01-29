import { characters } from "../../src/js-foundation/02-destructuring"

describe('02-destructuring', () => {
    test('characters should contain Flash, Superman', () => {
        // GIVEN
        // WHEN
        // THEN
        expect(characters).toContain('Flash')
        expect(characters).toContain('Superman')
    })

    test('first hero should be Flash and second Superman', () => {
        // GIVEN
        const [flash, superman] = characters

        // WHEN
        // THEN
        expect(flash).toBe('Flash')
        expect(superman).toBe('Superman')
    })
})