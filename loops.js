let btn = document.querySelector("button");

btn.addEventListener("keypress", function(e) {
    console.log(e.code);
    console.log("press the key ")
    console.log(this);
});