//  Question :- find the give arr to prime number and return it's indexs

function isPrimeFirst(element) {    // return to first touch elements 
    if(element % 2 === 0 || element < 2) {
        return false;
    }

    for(let i = 3; i <= Math.sqrt(element); i += 2) {
        if(element % i === 0) {
            return false;
        }
    }

    return true;
}


function isPrime(element) {  ///          return to all of within array
    if(element === 2) return true;
    if(element < 2) return false;
    if(element % 2 === 0) false;

    for(let i = 3; i <= Math.sqrt(element); i += 2) {
        if(element % i === 0) {
            return false;
        }
    }

    return true;
    
}

let arr = [2,11,7,1,9];

let findPrime = arr
.map((num, index) => (isPrime(num) ? index : -1) )
.filter(index => index !== -1);

console.log(findPrime);