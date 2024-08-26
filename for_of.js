// let sub = ["math", "marathi", "science", "english", "physics"];

// for(let s of sub) {
//     console.log(s.toUpperCase());
// }

let item = [300, 432, 432, 422, 500, 499];

let i = 0; 
for(let val of item) {
    let offer = val / 10;
    item[i] = item[i] - offer;
    console.log(`item value after offers = ${item[i]}`);
    i++;
}