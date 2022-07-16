const repeatedChars = require('./index');

test('Converts two arrays to single String', () => {
	expect(repeatedChars(['a','b','c'], [1,2,3])).toContain('abbccc');
});
