// map: return array
let names = ["mohammed", "ali", "salah"];

let a = names.map((el)=>el.toUpperCase());

console.log(a);

// other exampl
// {key: val}
let numbers = [1,2,3,5];

let x = numbers.map((el)=>{
    return {num: el}
});

console.log(x);

//

let y = numbers.map((el)=> 
     el+2
);
console.log(y);

//let numbers = [1,2,3,5];
// elem i: paire ==> {num: el} 
let tab = numbers.map((el,i)=> {
    return i % 2 ? {num: el} : el; //1: true; 0: false
})

console.log(tab);

