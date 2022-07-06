// 1.
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

// 2. nested arrays
// var nestedNums = [[2, 5, 8], [2, 6, 8, 4], [9, 34, 74, 22, 5]];

// // console.log(nestedNums[1][3]);

// function searchNestedArr(arr, numToFind) {
//   for (let i = 0; i < arr.length; i++) {
//     let currentSubArr = arr[i];
//     for (let j = 0; j < currentSubArr.length; j++) {
//       if (arr[i][j] == numToFind) {
//         return {
//           i, j
//         }
//       }
//     }
//   }
// }

// console.log(searchNestedArr(nestedNums, 9));

// 3.
// function getTotal(arrayOfNumbers) {
//   var sum = arrayOfNumbers[0];
//   for(var i=0; i<arrayOfNumbers.length; i++) {
//     sum += arrayOfNumbers[i];
//     console.log("the current sum is: " + sum); 
//   }   
//   console.log("the total is: " + sum);
// }
// getTotal([1, 3, 5]);

// 4.
// for(var i=0; i<10; i++) {
//   console.log(i);
//   i = i + 3; 
// }
// console.log("outside of the loop " + i);

// 5.
// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];  
// // your code here!
// for(var i = 0; i < numbers.length; i++) {
//   if(numbers[i] >= 0) {
//     countPositives++;
//   }
// }   
// console.log("there are " + countPositives + " positive values");

// 6.
// for(var i=10; i>0; i--) {
//   if(i != 2) {
//     console.log(i);
//   } else {
//     console.log("ignition!");
//   }
// }
// console.log("liftoff!");

// 7.
// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";
    
// if(isSunny) {
//   whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//   whatToBring += "a coat, ";
// }
// if(isRaining) {
//   whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";
// console.log(whatToBring);

// 8.