// with javascript
// if..else
/*
let age = 8;

const test = (n)=> {
    if (n < 18) {
        return "adol"
    }

    else return "adult"
}

console.log(test(age))

// with ternary operator: short form if

let test1 =(n)=> {
    return n <18 ? "adol" : "adult" ;
}
console.log(test1(4));
*/
// example
// ES6
let marks = 20;
let result = (marks >= 40) ? "pass" : "fail";
console.log(` you ${result} the exam`)

// if ..else if..else
let age = 54;
let test = (n)=> {

    if (n < 18) {
        return "adol"
    }
    else if (n < 35) return "jeune";

    else return "adult"
};

console.log(test(age))

// with ternary operator

let test1 =(n)=> {
    return n < 18 ? "adol" : n < 35 ? "jeune" : "adult"

};

console.log(test1(age));

