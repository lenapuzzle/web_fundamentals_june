/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
const expected5 = "ba"

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
// function stringDedupe(str) {
//     var newStr = "";
//     for(let i = 0; i < str.length; i++) {
//       if(str[i] != str[i+1]) {
//         newStr += str[i];
//       }
//     }
//     return newStr;
// }

// Or you can do the following
function stringDedupe(str = "") {
  let distinctStr = "";
  const seen = {};

  for(let i = str.length - 1;i >=0; i--) {
    if(!seen[str[i]]) {
      distinctStr = str[i] + distinctStr;
      seen[str[i]] = true;
    }
  }
  return distinctStr;
}


console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));

/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world";
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
// function reverseWords(str) {
//   var arr = str.split(" ");
//   var newStr = "";
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = arr[i].length - 1; j >= 0; j--) {
//       newStr += arr[i][j];
//     }
//     newStr += " ";
//   }
//   return newStr;
// }

// Or you can do the following
function reverseWords(str) {
  let reversed = "";
  let curWord = "";
  for(let char of str) {
    if(char == " ") {
      reversed += curWord + " ";
      curWord = "";
    } else {
      curWord = char + curWord;
    }
  }
  return reversed + curWord;
}


console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg