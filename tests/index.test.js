const { filterLetter } = require('../lib/index');

describe('array function', () => {
  // it('returns an array', () => {
  //   const words = ['lion', 'frog', 'panda'];
  //   const wordArray = filterLetter(words);

  //   expect(wordArray).toEqual(expect.any(Array));
  // });
  
  // it('takes out words with Ls', () => {
  //   const arr = ['lemon', 'lime', 'orange', 'grapefruit'];
  //   const newArr = filterLetter(arr);
  //   expect(newArr).toEqual(['orange', 'grapefruit']);
  // });

  it('takes remaining words and adds a question to it', () => {
    const colors = ['blue', 'green', 'yellow', 'red'];
    const questionArray = filterLetter(colors);
    expect(questionArray).toEqual(['Do you like green?', 'Do you like red?'])
  });
});

