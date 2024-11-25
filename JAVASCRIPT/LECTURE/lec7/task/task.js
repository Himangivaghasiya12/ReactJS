// 1 — Print the numbers from 0 to 15.

// for(let i=0 ; i <=15; i++){
//     console.log(i);
// }

// 2 — Print the numbers from 12 to 24.

// for(let i=12 ; i <=24; i++){
//     console.log(i);
// }

// 3 — Print the ODD numbers from 7 to 31.


//   for(let i = 7; i <= 31; i++){ 
//     if(i % 2 != 0){
//      console.log(i)
//     }
// }

// 4 — Print the EVEN numbers from 10 to -20.

//   for(let i = -20; i <= 10; i++){ 
//     if(i % 2 == 0){
//      console.log(i)
//     }
// }

// 5—Iterate through all numbers from 1 to 45. Print the
// following:
// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

// for (let i = 1; i <= 45; i++) {
//     if (i % 3 === 0 && i % 5 === 0)
//     {
//         console.log("FizzBuzz");
//     } 
//     else if (i % 3 === 0)
//     {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) 
//     {
//         console.log("Buzz");
//     }
//     else
//     {
//         console.log(i);
//     }
// }

// 6—Print all the elements of the following array
// var thisIsAnArray = ["element1","element2","element3","element4"];

// var thisIsAnArray = ["element1","element2","element3","element4"];
// console.log(thisIsAnArray[0]);
// console.log(thisIsAnArray[1]);
// console.log(thisIsAnArray[2]);
// console.log(thisIsAnArray[3]);
// console.log(thisIsAnArray);

// 7—Calculate the sum of all the numbers in the following array
var numbersArray = [1,13,22,123,49]

var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;

for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log("The sum of all numbers in the array is: " + sum);
