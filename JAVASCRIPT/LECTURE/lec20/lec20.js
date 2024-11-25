// Javascript Object Method

// is() Method

// {
//     let obj = [ 10 , 20 , 30 , 40 ];

//     let obj1 = [ 10 , 20 , 30 , 40 ];

//     let Is = Object.is('obj','obj');

//     console.log(Is);

//     let Is1 = Object.is('obj' , 'obj1');

//     console.log(Is1);

//     let Is2 = Object.is([] , []);

//     console.log(Is2);
// }

// Object.getOwnPropertyNames() Method

// {
//     const obj1 = {
//         a : 1,
//         b : 2,
//         c : 3,
//     };

//     console.log(Object.getOwnPropertyNames(obj1));
//     console.log(Object.keys(obj1));
// }

// Object.fromEntries() Method

// {
//     let obj = new Map([["option-1",40] , ["option-2",80]]);

//     let DataEntries = Object.fromEntries(obj);

//     console.log(DataEntries);
// }

// Object.DefineProperties() Method
// {
//   let obj = {};

//   Object.defineProperties(obj, {
//     obj1: {
//       name: "jisha",
//       value: 50,
//     },

//     obj2: {
//       value: 100,
//     },
//   });
//   console.log(obj.obj1);
// }

// Object.Prototype Method

// {
//     let obj = [];

//     let obj1 = {Key1 : 20 , Key2:30 , Key3:50 , Key4:90};

//     console.log(obj1.Key1);

//     let DataObject = Object.create(obj1);

//     console.log(DataObject.Key2);

//     let ProtoObject = Object.getPrototypeOf(DataObject);

//     console.log(ProtoObject === obj1);
// }

// Javascript Call back function

// {
//     // function(){}

//     function sayHello(){
//         console.log('Hello');
//     }

//     function sayHi(){
//         console.log("Hi");
//     }

//     function sum(a , b , callback){
//         callback();
//         return console.log(a + b);
//     }

//     console.log(sum(10 , 20 , sayHello));

//     console.log(sum(30 , 40 , sayHi));
// }

// Javascript arrow functions

// function foo(){
//     return console.log("This is basic function");
// }

// foo();

// const foos = () => {return console.log('This is Arrow Function');}
// foos()

// const foos1 = () => console.log("This is Arrow Function");
// foos1()

// const fo = a => a + a;
// console.log(fo(10));

// const foo1 = ( a , b ) => a + b;
// console.log(foo(10,20));
