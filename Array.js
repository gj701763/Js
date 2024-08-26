/* we are give array of marks of students. 
  Filter out of the marks of students that scored 90+.
*/

// let arr = [99, 98, 77, 89, 69];

// let newArr = arr.filter((val) => {
//     return val > 90;
// })

// console.log(newArr);

/* Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
       Use the reduce method to calculate sum of all numbers in the array.
       Use the reduce methode to calculate product of all numbers in the array.
*/

let n = 5;

let arr = [];

for(let i = 1; i <= n; i++) {
    arr[i-1] = i;
}

console.log(arr);

let newArr = arr.reduce((prev , curr) => {
    return prev * curr;
})

console.log(newArr);
