//create a function that removes Ls from a list of words

function filterLetter(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    const word = arr[i].toLowerCase();
    if(!word.includes('l')) {
      mapped.push(`Do you like ${word}?`);
    }
  }
  return mapped;
}

module.exports = { filterLetter };