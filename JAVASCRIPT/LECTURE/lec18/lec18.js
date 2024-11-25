// Javascript Object and it's method

// {
//     const obj = {id:1 , firstName:"Jisha" , latsName:"Vadera" , gender:"female" , age:19};

//     console.log(obj);

//     const obj1 = new Object();

//     console.log(obj1);

//     let Data = obj.firstName;

//     console.log(Data);

//     let Data1 = obj["id"];

//     console.log(Data1);

//     obj.address = "united states";

//     console.log(obj);

//     obj.id = 2;

//     console.log(obj);
// }

// Object.assign() method
// {
// const obj = {id:1 , firstName:"Jisha" , latsName:"Vadera" , gender:"female" , age:19};

// const num = { key1:12 , key2:65 , key3:2 , key4:100};

// let Assign = Object.assign(obj , num);

// console.log(Assign);

// console.log(obj);

// let Assign1 = Object.assign({} , num , obj );

// console.log(Assign1);
// }

// Object.freeze() method 

// {
//     const obj = {id:1 , firstName:"Jisha" , latsName:"Vadera" , gender:"female" , age:19};

//     obj.id = 10;

//     console.log(obj);

//     let Data = Object.freeze(obj);

//     console.log(obj);

//     obj.id = 30;

//     console.log(obj);

//     obj.key1 = 100;

//     console.log(obj);
// }

// Object.create() method

// {
//     const obj = {
//         id:1 ,
//         firstName:"Jisha" , 
//         latsName:"Vadera" , 
//         gender:"female" , 
//         age:19,
//         NewObj:function(){
//             console.log(`my first name is ${this.firstName} and I am ${this.occupation}`);
//         }
//     };

//     let NewObject = Object.create(obj);

//     NewObject.occupation = "Developer";

//     console.log(NewObject.occupaton);

//     console.log(NewObject.NewObj());

//     console.log(obj);
// }