import {getAge} from "../../src/plugins";

describe('get-age.plugin', () => {
    test('getAge should return return a number', () => {
        // GIVEN
        const birthDate = '1984-10-18'

        // WHEN
        const age = getAge(birthDate)

        // THEN
        expect(typeof age).toBe('number')
    })
});