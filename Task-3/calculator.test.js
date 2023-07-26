const calc = require('./calculartor')


describe('Methods', () => {
    test('sum calculator', () => {
        // Arrange
        const num1 = 2
        const num2 = 4
        // Act
        const result = calc.sum(num1,num2)
        //Assert
        expect(result).toBe(6);
    })
    
    test('extract calculator', () => {
        // Arrange
        const num1 = 6;
        const num2 = 3;
        // Act
        const substract = calc.substrack(num1, num2)
        // Assert
        expect(substract).toBe(3)
    })
    
    test('multiply calculator', () => {
        // Arrange
        const num1 = 2;
        const num2 = 4;
        // Act
        const mult = calc.multiply(num1, num2);
        // Assert
        expect(mult).toBe(8);
    })

    test('divide calculator', () => {
        // Arrange
        const num1 = 9;
        const num2 = 3;
        // Act
        const div = calc.divide(num1, num2);
    })
})
