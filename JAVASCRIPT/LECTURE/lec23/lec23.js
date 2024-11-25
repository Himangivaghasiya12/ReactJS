// Asynconous Function
// setTimeout

// function great( a , b ){
//     console.log( a + b);
//     return a + b;
// }

// setTimeout( great , 4000 , 10 , 10)

// setInterval

// function great( a , b ){
//     console.log( a + b);
//     return a + b;
// }

// setInterval( great , 6000 , 60 , 60)


// clearTimeout , clearInterval

// let SetTimeId = setTimeout(function (){
//     console.log("hello");
// },5000)

// console.log(SetTimeId);

// clearInterval

// let count = 0;

// let SetIntervalID = setInterval(function(){
//     count+=1;

//     if(count == 5){
//         clearInterval(SetIntervalID)
//     }
//     console.log(count);
// } , 2000)

// this keyword in javascript

// this in global scope

// let firstName =  this

// console.log(firstName);

// this in inner function

// function great(){
//     console.log(this);
// }
// great();

// this is inner Object

// const profile = {
//     firstName: "Jack",
//     age : 25,

//     greet(){
//         console.log(this);
//         console.log(this.firstName);
//     }
// }

// profile.greet();

// this keyword in innner function

// {
//     const user = {
//         firstName: "Jack",
//         lastName: "Birla",
//         age : 25,
    
//         greet(){
//             console.log(this);
//             console.log(this.lastName);

//                 function innerFunc(){
//                     console.log(this);
//                     console.log(this.firstName);
//                 }

//                 innerFunc()
//         }
//     }
    
//     user.greet();
// }

// this with arrow function

let great = () => console.log(this);

great();

{
    const user = {
        firstName: "Jack",
        lastName: "Rayan",
        age: 25,

        greet(){
            console.log(this);
            console.log(this.lastName);

                const innerFunc = () => {
                    console.log(this);
                    console.log(this.firstName);
                }

                innerFunc();
        }
    }

    user.greet();
}