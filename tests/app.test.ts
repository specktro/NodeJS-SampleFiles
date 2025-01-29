describe('Test in the app file', () => {
    test('should be true', () => {
        // GIVEN
        const num1 = 10
        const num2 = 20

        // WHEN
        const result = num1 + num2

        // THEN
        expect(result).toBe(30)
    })
})