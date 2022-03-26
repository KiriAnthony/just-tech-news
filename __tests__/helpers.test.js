
const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() returns a pluralized word if amount>1', () => {
    const word = 'cat';
    const amount = 3;

    expect(format_plural(word, amount)).toBe('cats');
});