import { emailTemplate } from "../../src/js-foundation/01-template"

describe('01-template', () => {
    test('emailTemplate should contain a message', () => {
        // GIVEN
        // WHEN
        // THEN
        expect(emailTemplate).toContain('Hi, ')
    })

    test('emailTemplate should {{name}} and {{orderID}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/)
        expect(emailTemplate).toMatch(/{{orderId}}/)
    })
})