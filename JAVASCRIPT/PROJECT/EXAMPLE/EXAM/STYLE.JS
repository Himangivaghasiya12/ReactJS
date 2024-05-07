// Write a JavaScript program to get the current date.

{
    const date = new Date();
    
    const a = date.toDateString();
    
    console.log(a);


}    

// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.


{

    function text(str) {
      
        const text = str.charAt(0).toUpperCase()  + str.slice(1) ;
    
        return text;
    }
    
    const string = "hello goodmorning"; 
    
    const result = text(string);
    
    console.log(result);

}

