        // ***** 1 *****

//  Print the numbers from 0 to 15

// for (var i = 0; i <= 15; i++)
//  {
//     console.log(i);
//  }

        // ***** 2 *****

//    Print the numbers from 12 to 24

// for (var i = 12; i <= 24; i++)
//  {
//     console.log(i);
//  }


      // ***** 3 *****

//    Print the ODD numbers from 7 to 31.


        // for (var i = 7; i <= 31; i++)
        // {
        //      if( i % 2 != 0);
        //       {
        //         i++;
        //       }
        //     console.log(i);
        // }

        // ***** 4 *****

// Print the EVEN numbers from 10 to -20.

            
        // for (var i = 10; i > -20; i--)
        //  {
        //     if( i % 2 == 0);
        //     {
        //        i--;
        //     }
        //   console.log(i);
        // }

               // ***** 5 *****

// Iterate through all numbers from 1 to 45. Print the
// following:
// ● For multiples of 3 print “Fizz”
// ● For multiples of 5 print “Buzz”
// ● For multiples of 3 and 5 print “FizzBuzz”


// for (var i = 1; i <= 45; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     }
//   }

                 // ***** 6 *****

// Print all the elements of the following array
// var thisIsAnArray = ["element1", "element2" ,"element3","element4"];


// var Array = ["element1", "element2", "element3", "element4"];
// for (var i = 0; i < Array; i++)
//   {
//    console.log(Array[i]);
// }

// Calculate the sum of all the numbers in the following array
// var numbersArray = [1,13,22,123,49]

var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;
for (var i = 0; i < numbersArray.length; i++) {
  sum = sum + numbersArray[i];
}
console.log("The sum is: " + sum);