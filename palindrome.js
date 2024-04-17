//takes in a word and returns true if the word is a palindrome, false if it is not
export function isWordPalindrome(str) {
  if (hasWhiteSpace(str)) return false;
  const lwr = str.toLowerCase();
  const half = Math.floor(lwr.length / 2);
  for (let i = 0; i < half; i++) {
    if (lwr.at(i) !== lwr.at(str.length - i - 1)) {
      return false;
    }
  }
  return true;
}
//takes in a sentence and returns true if the sentence is a palindrome, false if it is not
export function isSentencePalindrome(str) {
  const lwr = str.toLowerCase();
  const half = Math.floor(lwr.length / 2);
  for (let i = 0; i < half; i++) {
    if (lwr.at(i) !== lwr.at(str.length - i - 1)) {
      return false;
    }
  }
  return true;
}

function hasWhiteSpace(s) {
  return /\s/g.test(s);
}