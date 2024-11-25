// Javascript Array Method

/*

fill
some
every
reduce 
reduceRight
find
findIndex
findLastIndex
include
Array.isArray
flat
flatMap
*/

// fill method in array

// let array = ["java" , "html" , "nodejs" , "css" , "python"];

// let fill = array.fill("SkillQode",2);

// console.log(fill);

// some and every method

// let array = ["java" , "html" , "nodejs" , "css" , "python"];

// let some1 = array.some(item => item === "java");

// let every = array.every(item => item === "java");

// console.log(some1);

// console.log(every);

// reduce method

// {
//     let num = [ 12 , 98 , 65 , 54];

//     let reduce1 = num.reduce((current , pervi) => current+pervi);

//     console.log(reduce1);

//     let re1 = num.reduceRight((current , pervi) => current+pervi);

//     console.log(re1);

// }

// findIndex and findLastIndex

// let array = ["java" , "html" , "nodejs" , "css" , "python"];

// let array1 = [ 45 , 65 , 32 , 98 , 64];
// let num = array1.findIndex(item => item > 2);

// console.log(num);

// let arr1 = array.findIndex(item => item.length > 4);

// console.log(arr1);

// let arr2 = array.findLastIndex(item => item.length < 4);

// console.log(arr2);

// include method 

// let num1 = [ 56 , 21 , 32 , 84 , 24 ];

// let include1 = num1.includes(20);

// console.log(include1);


// Array .isArray

// let ArrayObject = new Array(65 , 32 , 74 , 58 );

// console.log(ArrayObject);

// let Array1 = [ 12 , 15 , 36];

// let isarray = Array.isArray();

// console.log(isarray);

// console.log(Array.isArray([]));

// console.log(Array.isArray('12'));

// console.log(Array.isArray(new Array(45,21,36,78,110)));

// console.log(Array.isArray(new Array()));

// flat and flatMap method

// {
//     let NewArray = [ 12 , 65 , 21 , 74 , 85 [54 , 63 , 21[2 , 10, 8]]];

//     console.log(NewArray);

//     let Flat = NewArray.flat();

//     console.log(Flat);

//     let Flat1 = NewArray.flat(2);

//     console.log(Flat1);

//     let array = [10,20,10,20];

//     let flatMap1 = array.flatMap(item => (item === 10 ? [10 , [ 10 , 10]] : 20));

//     console.log(flatMap1);
// }

//  at method

// {
//     let arry = ["data" , "disk" , "number" , "value"];
//     let end = arry.at(2);
//     console.log(end);
// }

//  join array 

// {
//     let arry = ["data" , "disk" , "number" , "value"];
//     let Join = arry.join("\"")
//     console.log(Join);
// }

// MathObject method

// console.log(Math);

// let math = Math.PI
// console.log(math);

// let math = Math.sqrt(100)
// console.log(math);

// let math = Math.log(10);
// let math1 = Math.log2(8);
// let math2 = Math.log10(10);

// console.log(math);
// console.log(math1);
// console.log(math2);

// let math = Math.ceil(26.10);
// console.log(math);


// let math = Math.floor(26.100)
// console.log(math);

// let math = Math.trunc(101.101);
// console.log(math);

let math = Math.pow(5,2);
console.log(math);