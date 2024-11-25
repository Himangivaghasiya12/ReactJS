// javascript nested loop
// for(Init; condition; although){
//     for(Init; condition; although){
//         statement;
//     }
// }

// for(let i = 0; i < 10; i++){
//     console.log(`${i} hello main`);
//     for(let j = 0; j < 5; j++){
//         console.log(`${j} child loop`);
//     }
// }

// javascript break statements

// for(let i = 0; i < 10; i++){
//     console.log(`${i} hello main`);
//     if (i == 2) {
//         break;
//     }
//     for(let j = 0; j < 5; j++){
//         console.log(`${j} child loop`);
//     }
// }

// for(let i = 0; i < 10; i++){
//     console.log(`${i} hello main`);
//     for(let j = 0; j < 5; j++){
//         if (j == 2) {
//             break;
//         }
//         console.log(`${j} child loop`);
//     }
// }

// Javascript continue statement

// loop:for(let i = 0; i < 10; i++){
//     console.log(`${i} hello main`);
//     for(let j = 0; j < 5; j++){
//         if (j == 3) {
//             continue loop;
//         }
//         console.log(`${j} child loop`);
//     }
// }


// Javascript for...in loop

// let object = {Firstname:"John", Lastname:"Doe", Age:46, Gender:"Male"};

// let data1 = object.Firstname
// let data2 = object.Lastname
// let data3 = object.Age
// let data4 = object.Gender

// console.log(data1);
// console.log(data2);
// console.log(data3);
// console.log(data4);

// console.log(object);

// for(let key in object){
//     console.log(`${key} = ${object[key]}`);
// }

// javascript for...of loop

let Newarray = ["john","doe",46,"male"];
let data5 = Newarray[0];
let data6 = Newarray[1];
let data7 = Newarray[2];
let data8 = Newarray[3];

// console.log(data5);
// console.log(data6);
// console.log(data7);
// console.log(data8);

// for(let value of Newarray){
//     console.log(`${value}`);
// }

let string = "Javascript!";

for(let char of string){
    console.log(`${char}`);
}