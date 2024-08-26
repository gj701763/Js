"use strict";

function saveDb(data) {
  return new Promise(function (resolve, reject) {
    var internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
      resolve("Success, data was save");
    } else {
      reject("Failure, date was not save");
    }
  });
}

saveDb("Gajanan Jadhav").then(function (result) {
  console.log("data1 save");
  console.log(result);
  return saveDb("Rajendra Jadhav");
}).then(function (result) {
  console.log("data2 save");
  console.log(result);
  return saveDb("Soham Raje");
}).then(function (result) {
  console.log("data3 save");
  console.log(result);
})["catch"](function (error) {
  console.log("Promise is rejected");
  console.log(error);
});