//takes in a word and returns true if the word is a palindrome, false if it is not
export function isWordPalindrome(str) {
  const word = str.toLowerCase();
  const reverse = word.split('').reverse().join('');

  if (word === reverse) {
    return true;
  }
  return false;
}

//takes in a sentence and returns true if the sentence is a palindrome, false if it is not
export function isSentencePalindrome(str) {
  const sentence = str.toLowerCase().split(' ').join('');
  const reverse = sentence.split('').reverse().join('');

  if (sentence === reverse) {
    return true;
  }
  return false;
}
