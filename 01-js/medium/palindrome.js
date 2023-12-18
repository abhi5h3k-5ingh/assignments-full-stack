/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n=str.length;
  for(let i=0, j=n-1;i<j;i++, j--){
    if(str[i].toLowerCase()<'a' || str[i].toLowerCase()>'z')
      continue;
    if(str[j].toLowerCase()<'a' || str[j].toLowerCase()>'z')
      continue;
    else if(str[i].toLowerCase() != str[j].toLowerCase()){
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome("Nan"));
module.exports = isPalindrome;
