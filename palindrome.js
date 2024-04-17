//takes in a word and returns true if the word is a palindrome, false if it is not
export function isWordPalindrome(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1]) {
      return false;
    }
    return true;
  }
}
//takes in a sentence and returns true if the sentence is a palindrome, false if it is not
export function isSentencePalindrome(str) {
  str = str.trim().toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1]) {
      return false;
    }
    return true;
  }
}
