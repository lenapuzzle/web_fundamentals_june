/* 
String Anagrams
Given a string,
return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
Ok to use built in methods

suggested function signature: generateAnagrams(str, anagrams=[], partial="")
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
// 

let generateAnagrams = (string) => {
    if (!string || typeof string !== "string") {
        return "Please enter a string"
    } else if (string.length < 2) {
        return string
    }

    let permutationsArray = []

    for (let i = 0; i < string.length; i++) {
        let char = string[i]

        if (string.indexOf(char) != i)
            continue

        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let permutation of generateAnagrams(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
}

console.log(generateAnagrams(str1))

// function generateAnagrams(str, anagrams=[], partial="") {
//     if (!str) anagrams.push(partial) // if (str.length === 0) 

//     for (let i = 0; i < str.length; i++){
//         const currentLetter = str[i]
//         const beforeLetter = str.slice(0,i)
//         const afterLetter = str.slice(i+1)
//         const withoutLetter = beforeLetter + afterLetter
//         const newPartial = partial + currentLetter
//         generateAnagrams(withoutLetter, anagrams, newPartial)
//     }
//     return anagrams
// }