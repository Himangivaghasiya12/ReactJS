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

// var numbersArray = [1, 13, 22, 123, 49];
// var sum = 0;
// for (var i = 0; i < numbersArray.length; i++) {
//   sum = sum + numbersArray[i];
// }
// console.log("The sum is: " + sum);

                 // ***** 1 *****

// Display Alert in JavaScript

// alert("this is javascript")

                // ***** 4 *****

// mouseover and mouseout in javascript     

// document.getElementById('click').addEventListener("mouseover" , size)

// function size(){
//     document.getElementById('demobox').style.height = "200px"

//     document.getElementById('demobox').style.width = "200px"
    
//     document.getElementById('demobox').style.backgroundColor = "lightblue"
// }


// document.getElementById('click').addEventListener("mouseout" , size)

// function size(){
//     document.getElementById('demobox').style.height = "200px"

//     document.getElementById('demobox').style.width = "200px"
    
//     document.getElementById('demobox').style.backgroundColor = "lightblue"
// }

                      // ***** 5 *****

// Use keypress In JavaScript to Display Alerts

// document.addEventListener('keypress', function(event) {
//         alert('A key was pressed!');
//       });
      

                        // ***** 6 *****

// JavaScript Validation Examples

// function myFunction() {
//         document.getElementById("myText").required = true;
//         document.getElementById("demo").innerHTML = "The required property was set. The text field must now be filled out before submitting the form.";
//       }


                        // ***** 7 *****

// Textbox required validation in javascript


                      // ***** 13 *****


// . Retrieve Today’s Date in JavaScript


// {
//         const date = new Date();
        
//         const a = date.toDateString();
        
//         console.log(a);
    
    
//     }

// window.history.forward();   


// window.history.forward();
//     function noBack() {window.history.forward(); }
// window.onload='noBack()';
// window.onpageshow=function(evt){if(evt.persisted)noBack()}
// window.onunload=function(){void(0)}
              
//       33. JavaScript get or set radio button value

// function checkButton() {  
//         if(document.getElementById('summer').checked) { 
//             document.getElementById("disp").innerHTML 
//                 = document.getElementById("summer").value 
//                 + " radio button is checked"; 
//         } 
//         else if(document.getElementById('winter').checked) { 
//             document.getElementById("disp").innerHTML 
//                 = document.getElementById("winter").value 
//                 + " radio button is checked";   
//         } 
//         else if(document.getElementById('rainy').checked) { 
//             document.getElementById("disp").innerHTML 
//                 = document.getElementById("rainy").value 
//                 + " radio button is checked";   
//         } 
//         else if(document.getElementById('autumn').checked) { 
//             document.getElementById("disp").innerHTML 
//                 = document.getElementById("autumn").value 
//                 + " radio button is checked";   
//         }
//         else { 
//             document.getElementById("error").innerHTML 
//                 = "You have not selected any season"; 
//         }
// }

// ------------or---------

// function checkButton() {    
//         var getSelectedValue = document.querySelector(   
//             'input[name="season"]:checked');   
            
//         if(getSelectedValue != null) {   
//             document.getElementById("disp").innerHTML   
//                 = getSelectedValue.value   
//                 + " season is selected";   
//         }   
//         else {   
//             document.getElementById("error").innerHTML   
//                 = "*You have not selected any season";   
//         }   
//     }    

// <!-- 34.   Get radio button selected value using JavaScript -->


// function displayRadioValue() {
//         var ele = document.getElementsByName('gender');

//         for (i = 0; i < ele.length; i++) {
//             if (ele[i].checked)
//                 document.getElementById("result").innerHTML
//                     = "Gender: " + ele[i].value;
//         }
//     }
		
// <!-- 35. set radio button value using JavaScrip -->


// function setRadioButtonValue(value) {
//         // Get the radio button element by its value
//         var radioButton = document.querySelector('input[value="' + value + '"]');
        
//         // Check if the radio button element exists
//         if (radioButton) {
//             // Set the checked property to true
//             radioButton.checked = true;
//         } else {
//             console.log('Radio button with value ' + value + ' not found.');
//         }
//     }



// <!-- 36. JavaScript screen height -->


// let height = screen.height;
// document.getElementById("demo").innerHTML =  height + "px";







setTimeout(function() {
        location.reload();
    }, 5000); 


 setTimeout(function() {
        console.log("hallo JavaScript refresh");
 }, 1000);   