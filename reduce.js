let arr = [2,3,5,4,2,5,45,67,23];

const ans = arr.reduce((min,el) => {
    if(el > min){
        return min;
    }else{
        return el
    }
});

console.log(ans);