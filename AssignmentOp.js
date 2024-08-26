// let a = 5
// let b = 2

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// /* Get user to input a number using promt("Enter a number "). 
//     Check if the number is a multiple of 5 or not. */

// let number = prompt("Enter the Number is : ");

// if( number % 5 == 0) {
//     console.log(number,"number is a multiple of 5 ");
// }else{
//     console.log(number,"number is not multiple by 5  ");
// }

// let gameNum = 34;

// let userNum = prompt("Enter userNumber is : ");

// while( gameNum != userNum) {
//     userNum = prompt("You Enter the wrong number , guess right number : ");
// }

// console.log("congratulations, you Enter the right number!!!");


// let nameS = `this is a special templates`;

// console.log(nameS);

let arr = [99,98,77,89,69];
// let avg;
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     avg = sum / arr.length;
// }
// console.log(avg);

// arr.forEach((val) => {
//     //console.log(val ** 2);
// });

let newArr = arr.filter((val) => {
    return val > 90;
});

console.log(newArr);

