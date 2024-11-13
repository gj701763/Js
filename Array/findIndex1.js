let arr = [3, -1, 4, 1, 5, 9, 2, 6];
const firstTouch = arr
.filter((num) => num > 0)
.findIndex((num, idx, arr) => {
    if(idx > 0 && num <= arr[idx -1]) return false;
    if(idx < arr.length - 1 && num <= arr[idx + 1]) return false;
    return true
});

console.log(firstTouch);