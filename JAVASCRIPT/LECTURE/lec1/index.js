document.getElementById("demo").innerHTML  
= " Hello , Good Morning "

console.log("hey");

// Using variable as global

// var a= 10
// var b=20
// console.log(a+b);


//  using scope  

// {
//     var a=10
//     var b=20
//     console.log(a+b);
// }

// calling outside using scope

// {
//     var a=10
//     var b=20
// }
// console.log(a+b);   

// calling upwards using scope
// it will not give output because before declaration call the variables

// console.log(a+b);
// {
//     var a=10
//     var b=22
// }

// using let variable
//let and const keyword ECMA-6(2015)


// let a=10
// let b=20
// console.log(a+b);   

// using let variable using scope

// {
//     let a=10
//     let b=09
//     console.log(a+b);
// }

// calling upwards using scope
// it will not give output because before declaration call the variables

// console.log(a+b);
// {
//     let a=10
//     let b=20
// }

// calling outside the block scope

// {
//     let a=10;
//     let b=20;
// }
// console.log(a+b);

// Using Constant 

// const a=10
// const b=20
// console.log(a+b);

//it will not work in js

// {
//     const a=10
//     const b=10
// }
// console.log(a+b);

