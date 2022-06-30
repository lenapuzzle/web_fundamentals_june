// var nums = [23, 0, 30, 24, 8, 6, 1, 22];
// var nums2 = [3, 8, 4, 9];

// function searchForNum(arr, numToFind) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     if (arr[i] == numToFind) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(searchForNum(nums, 1));

// nested arrays
var nestedNums = [[2, 5, 8], [2, 6, 8, 4], [9, 34, 74, 22, 5]];

// console.log(nestedNums[1][3]);

function searchNestedArr(arr, numToFind) {
  for (let i = 0; i < arr.length; i++) {
    let currentSubArr = arr[i];
    for (let j = 0; j < currentSubArr.length; j++) {
      if (arr[i][j] == numToFind) {
        return {
          i, j
        }
      }
    }
  }
}

console.log(searchNestedArr(nestedNums, 9));