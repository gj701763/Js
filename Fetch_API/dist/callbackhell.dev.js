"use strict";

var h1 = document.querySelector("h1"); // function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

function changeColor(color, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      h1.style.color = color;
      resolve("color was change");
    }, delay);
  });
}

changeColor("red", 1000).then(function () {
  console.log("red color was change");
  return changeColor("blue", 1000);
}).then(function () {
  console.log("blue color was change");
  return changeColor("green", 1000);
}).then(function () {
  console.log("green color was change");
  return changeColor("purple", 1000);
}).then(function () {
  console.log("purple color was change");
}); // let arr = ["red", "green", "blue","yellow","purple","black"];
//     let random = Math.floor(Math.random() * a);
// changeColor(random, 1000, () => {
//     changeColor(random, 1000, () => {
//         changeColor(arr[2], 1000, () => {
//             changeColor(arr[3], 1000, () => {
//                 changeColor(arr[4], 1000);
//             });
//         });
//     });
// });