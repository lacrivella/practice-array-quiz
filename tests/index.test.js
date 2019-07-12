const { filterLetter } = require('../lib/index');

describe('array function', () => {
  it('returns an array', () => {
    const words = ['lion', 'frog', 'panda'];
    const wordArray = filterLetter(words);

    expect(wordArray).toEqual(expect.any(Array));
  }); 
});

