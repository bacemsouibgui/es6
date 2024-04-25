let str = "mohamed";
let age = 26;
let address = {
    city: "city el Khadhra",
    cp: 1200
}

// with javascript
let string = "my name is " + str + " and my age is " + age + " and I live in " + address.city

console.log(string)

// with ES6 (template literals)
let string1 = `my name is ${str} and my age is ${age} and I live in ${address.city}`

console.log(string1)

// example
let name = "Go My Code";

// with javascript
console.log("welcome to " + name)

// with ES6 (template literals)
console.log(`welcome to ${name}`)