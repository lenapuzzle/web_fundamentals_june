/* 
Array: Binary Search (non recursive)
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .
Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;



/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */

function binarySearch(sortedNums, searchNum) {
    let left_index = 0;
    let right_index = sortedNums.length - 1;
    while (left_index <= right_index) {
        let i = Math.floor(right_index - left_index / 2)
        if (sortedNums[i] == searchNum) {
            return true;
        }else if (sortedNums[i] > searchNum) {
            right_index = i-1;
        }else {
            left_index = i+1;
        }
    }
    return false;
}








// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;

// let iterativeFunction = function (arr, x) {
  
//   let start=0, end=arr.length-1;
      
//   // Iterate while start not meets end
//   while (start<=end){

//       // Find the mid index
//       let mid=Math.floor((start + end)/2);

//       // If element is present at mid, return True
//       if (arr[mid]===x) return true;

//       // Else look in left or right half accordingly
//       else if (arr[mid] < x)
//           start = mid + 1;
//       else
//           end = mid - 1;
//   }

//   return false;
// }
// // Driver code

  
// if (iterativeFunction(arr, x, 0, arr.length-1))
//     document.write("Element found!<br>");
// else document.write("Element not found!<br>");
  
// x = 6;

                                

