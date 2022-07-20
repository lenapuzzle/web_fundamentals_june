/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */

 function dedupeSorted(nums) {
  let new_arr = []
  for (let i = 0; i < nums.length; i++){
      if (new_arr[new_arr.length-1] != nums[i]){
          new_arr.push(nums[i])
          // console.log(new_arr.includes([nums[i]]))
          // console.log(new_arr)
      }
  }
  return new_arr
}

console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))
console.log(dedupeSorted(nums4))

// or
// function dedupeSorted(nums) {
//   return [...new Set(nums)];
//   }
  
//   console.log(dedupeSorted(nums1));
//   console.log(dedupeSorted(nums2));
//   console.log(dedupeSorted(nums3));
//   console.log(dedupeSorted(nums4));



// // questionable
// var dedupeSorted = function(nums) {
//   const length = nums.length;

//   if( length <= 1 ){
//       return length;
//   }

//   let i = 0;

//   for(let j = 1; j < length; j++){
//       if( nums[i] != nums[j] ){
//           i++;
//           nums[i] = nums[j];
//       }
//   }
//   return i + 1;
// };

// dedupeSorted(nums1)
// dedupeSorted(nums2)
// dedupeSorted(nums3)
// dedupeSorted(nums4)


/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const twoNums1 = [3, 5, 4, 3, 4, 6, 5];
const twoExpected1 = 6;

const twoNums2 = [3, 5, 5];
const twoExpected2 = 3;

const twoNums3 = [3, 3, 5];
const twoExpected3 = 5;

const twoNums4 = [5];
const twoExpected4 = 5;

const twoNums5 = [];
const twoExpected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
 function firstNonRepeated(nums) {
  let numObject = {};
  let allLowestIndex = nums.length;
  let lowestNoDupes = 0;

  for(var i = nums.length-1; i >= 0; i--){
      if(!(nums[i] in numObject)){
          numObject[nums[i]] = { times: 1, lowestIndex: i};
      }
      else{
          numObject[nums[i]].times++;
          numObject[nums[i]].lowestIndex = i;
      }
  }
  let isFound = false;

  for(key in numObject){
      number = numObject[key];
      if(number.times == 1 && number.lowestIndex < allLowestIndex){
          allLowestIndex = number.lowestIndex;
          lowestNoDupes = +key;
          isFound = true;
      }
  }
  if(isFound == false){
      return null
  }

  return lowestNoDupes
}

// or
// function firstNonRepeated(nums) {
//   const freq = {};
//   for (const num of nums) {
//     if (freq.hasOwnProperty(num)) {
//       freq[num]++;
//     } else {
//       freq[num] = 1
//     }
//   }
//   for (const num of nums) {
//     if (freq[num] === 1) {
//       return num;
//     }
//   }
//   return null
// }