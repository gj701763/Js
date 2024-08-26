function asnynfuntion1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1...");
            resolve("success");
        }, 3000);
    });
}


function asnynfuntion2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2...");
            resolve("success");
        }, 3000);
    });
}

console.log("fetching data1....");
asnynfuntion1().then(() => {
    console.log("fetchin data2....");
    asnynfuntion2().then(() => {});
})























// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log(" I am promise1;");
//         //resolve("success");
//         reject("error");
//     });
// };

// let promise = getpromise();
// promise.then((res) => {
//     console.log("Promise is fullfilled");
// });


// promise.catch((err) => {
//     console.log("Promise is Rejected",err);
// });