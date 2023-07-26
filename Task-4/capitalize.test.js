const capitalize = require('./capitalize')

test('checking if the first letter of a string is capitalized', () => {
  const string = 'country';
  const capitalizedString = capitalize(string);
  expect(capitalizedString).toBe('Country');
})