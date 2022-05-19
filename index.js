function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length/2; i++){
    const x = word.length -1 -i;
    if(word[i] !== word[x]) return false
  }
  return true
}

/* 
  Add your pseudocode here
  iterate through letters of word
  if first letter equals last letter, true
  if letters don't match, false
*/

/*
  Add written explanation of your solution here
  create a function that takes a word and returns true if the word
  reads the same forewards as it does backwards, and false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
