// Filter
// les elements d'indices paire 1, 3

let numbers = [1,2,3,5];

let x = numbers.filter((el,i)=> !(i % 2))
console.log(x);

// exampl
let users = [{name: "mohammed"}, {name: "ali"}, {name: "salah"}];

let y = users.filter((el)=>el.name.length <=5);
console.log(y);
