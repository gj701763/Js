
// let msg = prompt("Enter the massage is : ");

// function myfunction(msg){
//     console.log(msg);
//     // console.log(`also I'am very bad in communication skills`);
// }

// for(let i = 0; i < 5; i++) {
//     myfunction(msg);
// }
// Create a function using the "function" keyword that takes a String as 
// an argument & returns the number of vowels in the string.


// function countVowels(str) {

//     let count = 0;
//     for(const char of str) {
//         if(char ==='a' || char ==='e'|| char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("Gajanan Jadhav");


// const countVowels = (str) =>{
//     let count = 0;
//     for(const char of str) {
//         if(char ==='a' || char ==='e'|| char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     console.log(count);
// }

let arr = [1,3,4,23,4,45,42];

arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});