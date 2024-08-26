// let divs = document.querySelectorAll(".box")
 

// let i = 1;
// for(div of divs) {
//     div.innerText = `${i}`;
//     i++;
// }
let w = document.querySelector("div");
// console.log(w); 

// let id = w.getAttribute("id");
// console.log(id);

let newbtn = document.createElement("button");
newbtn.innerText="click me!";
console.log(newbtn);

let div = document.querySelector("div");
//div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
div.after(newbtn);

newbtn.style.color="blue";
newbtn.style.backgroundColor="black";


let newHeading = document.createElement("h1");
newHeading.innerHTML= "<i>I'm a Engineer</i>";

document.querySelector("body").prepend(newHeading);

newHeading.remove();

