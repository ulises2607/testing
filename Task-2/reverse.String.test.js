const reverseString = require("./reverseString")


describe('reversing Strings', () => {
    test("reverse the input string", () => {
        expect(reverseString('barby')).toBe('ybrab')
        expect(reverseString('ulises')).toBe('sesilu')
        expect(reverseString('segura')).toBe('aruges')
    })
})