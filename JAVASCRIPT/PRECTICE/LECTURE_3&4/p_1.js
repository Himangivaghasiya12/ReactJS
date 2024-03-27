/* Create a program that performs arithmetic operations on two numbers. */

{

    let x = 5;
    let y = 2;
    
    let add = x + y;
    console.log(add);
    
    let sub = x -  y;
    console.log(sub);
    
    let multi = x *  y;
    console.log(multi);
    
    let divi = x /  y;
    console.log(divi);
    
    let reme = x %  y;
    console.log(reme);
    
    let exp = x **  y;
    console.log(exp);

}

// Use compound assignment operators to update variables.

{
    var x = 5;
    var y = 2;
    
    var add = x += y;
    console.log(add);
    
    var sub = x -=  y;
    console.log(sub);
    
    var multi = x *=  y;
    console.log(multi);
    
    var divi = x /=  y;
    console.log(divi);
    
    var reme = x %=  y;
    console.log(reme);
    
    var exp = x **=  y;
    console.log(exp);

}

// Compare two numbers and display the result.

{

    let x = 5;
    let y = 2;
    
    let com = x == y;
    console.log(com);
    
    let notcom = x !=  y;
    console.log(notcom);
    
    let comp = x ===  y;
    console.log(comp);
    
    let notcomp = x !==  y;
    console.log(notcomp);
    
    let getr = x >  y;
    console.log(getr);
    
    let notgetr = x >=  y;
    console.log(notgetr);

    let less = x <  y;
    console.log(less);
    
    let notless = x <=  y;
    console.log(notless);


}


// Use the ternary operator to check a condition

// (condition)? "Yes" : "No"

let a=20;
let b=30;

let c = (a > b) ? a : b;
console.log(c);

// Compare two strings and display the result

let m = "apple";
    let n = "banana";
    let z = "cat";
    
    let st1 = m===n; 
    console.log(st1);
    
    let st2 = m===z;
    console.log(st2);
