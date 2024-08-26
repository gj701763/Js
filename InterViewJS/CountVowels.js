const str = "Hey JS! You are AMAZING";
const vowels = ['a', 'e', 'i', 'o', 'u'];

function numbercount(data) {
    let count = 0;
    data.toLowerCase().split("").forEach((ch) => {
        vowels.includes(ch) && count++;
    });
    return count;
}


const num = numbercount(str);
console.log(num);