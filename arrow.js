let arr = [1,3,4,5];

const print =arr.some((el) => {
    return el % 2 != 0;
})

console.log(print);