const repeatedChars = require('./index')

test('Converts two arrays to single String', () => {
  expect(repeatedChars(['a', 'b', 'c'], [1, 2, 3])).toContain('abbccc')
  expect(repeatedChars(['h', 'e', 'l', 'o'], [1, 1, 2, 1])).toContain('hello')
})
