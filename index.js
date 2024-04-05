function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  return word.toLowerCase() === reversedWord.toLowerCase();
}

/* 
  Add your pseudocode here
  Initialize empty array called 'reversedArray'
  Iterate over each character in the input word
  After iteration 'reversedArray' is converted back to a string
  if(reversedWord === word);
  return true else false
*/

/*
  Add written explanation of your solution here
  The function converts the string to lowercase
  It then turns the string into an array of characters
  Reverses the array with built-in method reverse()
  Then turns array of characters back to a string using join ()
  It then compares the recent string with the original string using '==='
  Returns true if string is palindrome else false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
