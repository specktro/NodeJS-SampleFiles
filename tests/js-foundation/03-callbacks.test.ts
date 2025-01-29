import {getUserById} from "../../src/js-foundation/03-callbacks";
import {UserInfo} from "node:os";

describe('03-callbacks', () => {
    test('User not found', (done) => {
        // GIVEN
        const id = 10

        // WHEN
        getUserById(id, (error, user) => {
            // THEN
            expect(error).toBe(`User with id ${id} not found`)
            expect(user).toBeUndefined()
            done()
        })
    })

    test('User John Doe found', (done) => {
        // GIVEN
        const id = 1
        const expectedUser = {
            id: 1,
            name: 'John Doe'
        }

        // WHEN
        getUserById(id, (error, user) => {
            expect(error).toBeUndefined()
            expect(user).toEqual(expectedUser)
            done()
        })
    })
});