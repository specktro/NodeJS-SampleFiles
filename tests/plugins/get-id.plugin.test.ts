import {getUUID} from "../../src/plugins";

describe("get-id.plugin", () => {
    test('getUUID should return a valid value', () => {
        const uuid = getUUID()

        expect(typeof uuid).toBe('string')
        expect(uuid.length).toBe(36)
    })
})