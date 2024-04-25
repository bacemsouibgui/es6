// let & const
// const ==> constant
// let & var==> to reassign a variable

// var scoope: global
// let scoope: local

function boucle() {
    for (var i =0; i<5 ; i++) {
        console.log(i); // 0..4
    }
    console.log(i) // 5
}
console.log(boucle()) // undefined





function bouclee() {
    for (let i =0; i<5 ; i++) {
        console.log(i);  // 0..4
    }
    console.log(i); 

}

console.log(bouclee())

