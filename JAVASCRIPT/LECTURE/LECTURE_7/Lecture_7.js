// Javascript Nested Loop

// for(initi; condition; afterthought)
// {
//     for(initi; condition; afterthought)
//     {

//     }
// }

// for(let i = 0; i < 10; i++)
// {
//     console.log(`${i} Main Loop`);

//     for(let j = 0; j < 5; j++)
//     {
//         console.log(`${j} Child Loop`);
//     }
// }

// Javascript Breck Statments

// for(let i = 0; i < 10; i++)
// {
//     console.log(`${i} Main Loop`);
    
//     if(i == 2)
//     {
//         break;
//     }

//     for(let j = 0; j < 5; j++)
//     {
//         console.log(`${j} Child Loop`);
//     }
// }

// Loop:for(let i = 0; i < 10; i++)
// {
//     console.log(`${i} Main Loop`);

//     for(let j = 0; j < 5; j++)
//     {
//         if(i == 2)
//         {
//             break Loop;
//         }

//         console.log(`${j} Child Loop`);
//     }
// }

// Javascript continue Statments

// Loop:for(let i = 0; i < 10; i++)
// {
//     console.log(`${i} Main Loop`);

//     for(let j = 0; j < 5; j++)
//     {
//         if(j == 3)
//         {
//             continue Loop;
//         }

//         console.log(`${j} Child Loop`);
//     }
// }

// Javascript For...in Loop

// let Object = {Firstname:"Joe" , Lastname:"Biden" , Age:79 , Gender:"Male"};

// let Data1 = Object.Firstname
// let Data2 = Object.Lastname
// let Data3 = Object.Age
// let Data4 = Object.Gender

// console.log(Data1);
// console.log(Data2);
// console.log(Data3);
// console.log(Data4);

// console.log(Object);

// for(let key in Object)
// {
//     console.log(`${key} = ${Object[key]}`);
// }

// Javascript for...of loop

// let Newarray = ["Joe" , "Biden" , 79 , "Male"];

// let Data5 = Newarray[0]
// let Data6 = Newarray[1]
// let Data7 = Newarray[2]
// let Data8 = Newarray[3]

// console.log(Data5);
// console.log(Data6);
// console.log(Data7);
// console.log(Data8);

// for(let value of Newarray)
// {
//     console.log(`${value}`);
// }

// let String = "Javascript!";

// for(let char of String)
// {
//     console.log(`${char}`);
// }