            //  **** 1 ****

//  Check if a number is positive, negative, or zero

const number = -3;

if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}

             //  **** 2 ****

// Check if a person is eligible to vote

var age = 21; 
if(age >= 18) 
{ 
    console. log('You can vote in the election');
 } 
else 
{ 
    console. log('You can not vot in the election');
 }

              //  **** 3 ****

// Check if a year is a leap year

let year = 2024;
console.log(year); {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

              //  **** 4 ****

// Determine the largest of three numbers

let largest;
let num1=25;
let num2=350;
let num3=45;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);
  


              //  **** 5 ****

// Determine the grade based on a score

let marks = 90;

if(marks<=100 && marks>90){
    console.log("Grade:A+");
}
else if(marks<=90 && marks>80){
   console.log("Grade: A") ;
}
else if(marks<=80 && marks>70){
    console.log("Grade: B") ;
 }
else if(marks<=70 && marks>60){
    console.log("Grade: C") ;
 }
 else if(marks<=60 && marks>50){
    console.log("Grade: D") ;
 }
 else if(marks<=50 && marks>40){
    console.log("Grade: E") ;
 }
 else{
    console.log("Fail");
}