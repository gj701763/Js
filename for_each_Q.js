/* Qs. For a given array of numbers, print the square fo
   each value using the forEach loop.
*/

 let arr = [1,2,3,23,4,5,11,6,7,8,8,9,20];

// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(newArr);


let outputArr = arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
});

console.log(outputArr);

