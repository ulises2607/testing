const stringLength = require("./stringLength.js")

// test('take a string as an argument and return the quantity of characters that contains', () => {
//   const str1 = 'Hello!';
//   const result = stringLength(str1)
//   expect(result).toBe(6)
// });

test('checking if the string length is in the 1-10 range', () => {
  const strLong = 'toLongString';
  expect(() => stringLength(strLong)).toThrow(Error);
});
